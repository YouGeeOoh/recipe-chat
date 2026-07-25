import { useState, React, useRef, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import './App.css'
import Chat from './Chat';
import Header from './Header';
import chefIcon from './assets/chef.png'
import TextInput from './components/TextInput';
import Button from './components/Button';
import Select from './components/Select';
import { getAnswerFromAI } from './ai';
import Pearl from './components/Pearl';
import IngredientsList from './components/IngredientsList';



function NewChat() {
  const {
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

  } = useOutletContext();

  return (
    <div className="sub-container">
      <Header icon={chefIcon} title={"RECIPE AI"} />
      <Chat instructions={currentChat?.messages || []} />

      <IngredientsList ingredients={ingredients} removeIngredient={removeIngredient} />

      {showForm && <form className='textInput-container' onSubmit={generateRecipe}>

        <TextInput
          onKeyDown={handleKeyDown}
          onChange={autoGrow}
          value={text}
          ref={inputRef}
        />
        <div className="buttons-container">
          <Button onClick={addingItems} title="Add Item" />
          <Select country={country} onChange={getCountry} />
          {ingredients.length > 3 && <Button onClick={generateRecipe} title="Get Recipe" color="rgb(255, 60, 60)" />}
        </div>

      </form>}

    </div>
  )
}

export default NewChat