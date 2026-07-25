import { useState, React, useRef, useEffect } from 'react'
import './App.css'
import Chat from './Chat';
import Header from './Header';
import chefIcon from './assets/chef.png'
import TextInput from './components/TextInput';
import Button from './components/Button';
import Select from './components/Select';
import { getAnswerFromAI } from './ai';
import History from './History';
import Pearl from './components/Pearl';
// import IngredientsList from './components/IngredientsList';/*  */
import NewChat from './NewChat';
import { Outlet, useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const [text, setText] = useState("");
  const [country, setCountry] = useState("nigeria");
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("history");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [showForm, setShowForm] = useState(true);
  const [currentChatId, setCurrentChatId] = useState(crypto.randomUUID());

  const currentChat = history.find(chat => chat.id === currentChatId) ||
  {
    id: currentChatId,
    title: "",
    messages: []
  };


  function getCountry(e) {
    const newCountry = e.target.value;
    setCountry(newCountry);
  }


  function autoGrow(e) {
    const value = e.target.value;
    setText(value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  function addingItems() {
    const searchQuery = text.trim();
    if (!searchQuery) return;

    setIngredients(prev => (
      [...prev, {
        id: crypto.randomUUID(),
        item: searchQuery
      }]
    ));

    setText('');
    inputRef.current?.focus();
  }

  function removeIngredient(id) {
    setIngredients(prev =>
      prev.filter(ingredient => ingredient.id !== id)
    );
  }

  function deleteChat(id) {
    console.log("deleteChat")
    setHistory(prev => prev.filter(history => history.id !== id))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      addingItems();
    }
  }

  async function generateRecipe(e) {
    e.preventDefault();
    const ingredientNames = ingredients.map(item => item.item);

    const req = `I am in ${country}. I have these ingredients: ${ingredientNames} What meals can I make?`;

    const generatedRecipe = await getAnswerFromAI(ingredientNames, country, req);

    const userMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: req
    }

    const assistantMessage = {
      id: crypto.randomUUID(),
      role: 'assistance',
      content: generatedRecipe
    }
    const updatedMessages = [
      ...currentChat.messages,
      userMessage,
      assistantMessage
    ];

    setHistory(prevHistory => {
      const exists = prevHistory.some(
        chat => chat.id === currentChatId
      );
      if (exists) {
        return prevHistory.map(chat =>

          chat.id === currentChatId
            ? {
              ...chat,
              messages: updatedMessages
            }
            : chat
        );
      }
      return [
        ...prevHistory,
        {
          id: currentChatId,
          title: ingredientNames.join(", "),
          messages: updatedMessages
        }];

    });

    setShowForm(false);
    setIngredients([]);
  }

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);


  function newChat() {
    setCurrentChatId(crypto.randomUUID());
    setShowForm(true);
    setIngredients([]);
    navigate('/');
    console.log("newchat");
  }

  return (

    <div className='container'>

      <History history={history} newChat={newChat} deleteChat={deleteChat} />

      {/* Placeholder for any component that comes in here */}
      <Outlet
        context={{
          ingredients,
          history,
          generateRecipe,
          country,
          handleKeyDown,
          autoGrow,
          removeIngredient,
          currentChat,
          text,
          inputRef,
          showForm,
          addingItems,
          getCountry,
          newChat,
        }}
      />

      {/* </div> */}
    </div>

  );
}

export default Home
