import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Pearl(prop) {

  return (
    <div className='pearl'>
        {prop.name}
        <FaTimes className='cancel' onClick={prop.onClick}/>
    </div>
  )
}

export default Pearl