import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';


function History({ history, onClick }) {

  return (
  history.map(chat => (
      <Link to = {`history/${chat.id}`}>
      <div className="history-card">
        {chat.title.slice(0, 20) + "..."}
      <div className="icon">
           <FaTrashAlt 
          className='cancel'
          onClick={()=>{onClick(chat.id)}}
        />
      </div>
    </div>
    </Link>
)));
}

export default History