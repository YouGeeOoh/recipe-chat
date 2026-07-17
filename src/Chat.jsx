import React from 'react';
import ReactMarkdown from 'react-markdown';

function Chat({instructions}) {
 
return (
  <div className="chat-container">
    {instructions.map(instruction => (
      <div key={instruction.id} className={instruction.role}>
        <ReactMarkdown>{instruction.content}</ReactMarkdown>
      </div>
    ))}
  </div>
);
 
}

export default Chat;