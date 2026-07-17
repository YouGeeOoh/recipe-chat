import { useState, React, useRef, useEffect} from 'react'
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
import IngredientsList from './components/IngredientsList';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
    const [ingredients, setIngredients] = useState([]);
    const inputRef = useRef(null);
    const formRef = useRef(null);
    const [text, setText] = useState("");
    const [message, setMessage] = useState([]);
    const [country, setCountry] = useState("nigeria");
    const [history, setHistory] = useState([]);
    const [showForm, setShowForm] = useState(true);
  


  function getCountry(e){
      const newCountry = e.target.value;
      setCountry(newCountry);
      // console.log("country: ", newCountry);
  }
    
   
  function autoGrow(e) {
    const value = e.target.value;
    setText(value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  function addingItems (){
      const searchQuery = text.trim();
      if(!searchQuery) return;      

      setIngredients( prev=>(
          [...prev, {
            id:crypto.randomUUID(),
            item: searchQuery}]
      ));

      setText('');
      inputRef.current?.focus();
  }

  function removeIngredient(id) {
  setIngredients(prev =>
    prev.filter(ingredient => ingredient.id !== id)
  );
}

    function handleKeyDown(e){
      if(e.key === 'Enter' && !e.shiftKey ){
          e.preventDefault(); 
          addingItems();           
        }
    }

   async function generateRecipe(e){
      e.preventDefault();
      const ingredientNames = ingredients.map(item => item.item);

      const req = `Using these ingredients: ${ingredientNames.join(", ")}, 
      generate a ${country} recipe.`;
      

      const userMessage ={
        id:crypto.randomUUID(),
        role: "user",
        content: req
      };    

      const generatedRecipe = await getAnswerFromAI(ingredientNames, country);

      const assistantMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: generatedRecipe
      };

     setMessage(prev => {
      const updatedMessages = [
        ...prev,
        userMessage,
        assistantMessage
      ];

      setHistory(prevHistory => [
        ...prevHistory,
        {
          id: crypto.randomUUID(),
          title: ingredientNames.join(", "),
          content: updatedMessages
        }
      ]);

      return updatedMessages;
    });
          setShowForm(false);
      setIngredients([]);
  
    }

    function newChat(){
      setShowForm(true);
      setMessage([]);     
    }

  return (

    <div className='container'>
      
      <div className="history">
        {<Button onClick={newChat} title= "new chat"/>}

       <History history={history} />
      </div>

        <div className="sub-container">
          {/* <Header icon={chefIcon} title={"RECIPE AI"}/> */}

        <Chat instructions={message}/>

        <IngredientsList ingredients={ingredients} onClick={removeIngredient}/>

        {showForm && <form className='textInput-container' onSubmit={generateRecipe}>
          
            <TextInput 
              onKeyDown = {handleKeyDown}
              onChange = {autoGrow}
              value ={text}
              ref = {inputRef}
            />
          <Button onClick={addingItems} title= "Add Item"/>
          <Select country={country} onChange={getCountry}/>

          {ingredients.length > 3 && <Button onClick={generateRecipe} title = "Get Recipe" color="rgb(255, 60, 60)"  />}
        </form>}

        </div>

      
    </div>
    
  );
}

export default App
