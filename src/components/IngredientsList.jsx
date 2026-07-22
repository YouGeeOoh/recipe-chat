import React from 'react'
import Pearl from './Pearl';

function IngredientsList({ingredients, removeIngredient}) {
  
    const ingredientsLists = ingredients.map((arr)=>
        <li key={arr.id}>
          <Pearl
            id={arr.id} 
            name={arr.item}
            onClick={() => removeIngredient(arr.id)}
        />
        </li>
    );
    

  return (
    <ul className='list-container'>
        {ingredientsLists}
    </ul>
  );
}

export default IngredientsList