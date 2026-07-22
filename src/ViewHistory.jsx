import { useParams, useOutletContext } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import NewChat from "./NewChat";

function ViewHistory() {
  const { chatId } = useParams();
  const { history } = useOutletContext();

  const currentChat = history.find(chat => chat.id === chatId);

  if (!currentChat) {
    return <NewChat/>
  }

  return (
    <div className="chat-container">
      {currentChat.messages.map(message => (
        <div key={message.id} className={message.role}>
                <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}

export default ViewHistory