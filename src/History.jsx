import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';
import { Link, useNavigate} from 'react-router-dom';
import Button from './components/Button';


function History({ history, newChat, deleteChat }) {
const navigate = useNavigate();
//   return (
//   history.map(chat => (
//       <Link to = {`history/${chat.id}`}>
//       <div className="history-card">
//         {chat.title.slice(0, 20) + "..."}
      // <div className="icon">
      //      <FaTrashAlt 
      //     className='cancel'
      //     onClick={()=>{onClick(chat.id)}}
      //   />
      // </div>
//     </div>
//     </Link>
// )));
  return(
    <div className="history">
      <Button onClick={newChat} title = "new chat" />
      
   {   history.map(chat=>(
        <Link to = {`/history/${chat.id}`}>
          <div className="history-card" key={chat.id}>
            {chat.title.slice(0,20) + "..."}
              <div className="icon">
              <FaTrashAlt 
                className='cancel'
                onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                deleteChat(chat.id);
                if (location.pathname === `/history/${chat.id}`) {
                  navigate("/");
                }}}
              />
            </div>
          </div>
      </Link> 
        
      ))}
    </div>
  )
}

export default History