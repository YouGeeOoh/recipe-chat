import React from 'react'


function History({ history }) {
  const historyList = history.map(chat => (
  <li key={chat.id} className='history-card'>
    <p>{chat.title}</p>
    {console.log(chat.content)}
  </li>
));
  
  return (
    <ul>
      {historyList}
    </ul>
  );
}

export default History