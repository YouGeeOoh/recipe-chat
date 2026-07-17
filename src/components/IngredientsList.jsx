import React from 'react'
import Pearl from './Pearl';

function IngredientsList({ingredients, onClick}) {
   
    const ingredientsLists = ingredients.map((arr)=>
        <li key={arr.id}>
          <Pearl
            id={arr.id} 
            name={arr.item}
            onClick={() => onClick(arr.id)}
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