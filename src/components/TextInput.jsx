import React from 'react';
import Button from './Button';
// import {getAnswerFromAI} from '../ai';



function TextInput(
    {   onKeyDown, 
        rows, 
        onChange, 
        value, 
        ref, 
        placeholder,
    }) 
    
    {
 
    return (
        <textarea
            onKeyDown={onKeyDown}
            rows={1}
            onChange={onChange}
            value={value}
            ref={ref}
            placeholder = "Input Ingredients" 
        />

  );
}

export default TextInput