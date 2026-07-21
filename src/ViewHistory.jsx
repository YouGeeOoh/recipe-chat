  import React from 'react'
  import { useParams } from 'react-router-dom'


  function ViewHistory(instructions) {
    const params = useParams()
    return (
      <div className="chat-container">{
          instructions.map(instruction=>{
            <div className="chat-container"key={instruction.id} >
            { instruction.content.map(chat=>{
                {instruction.content - params} 
              })} 
            </div>
          })}
        </div>

        // <p> History </p>
    )
  }

  export default ViewHistory