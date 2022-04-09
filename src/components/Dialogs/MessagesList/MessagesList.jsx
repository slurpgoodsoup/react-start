import style from './MessagesList.module.css'
import Message from "./Message/Message"

const MessagesList = (props) => {
  let messageElements = props.messagesData.map(message => <Message key={message.id} name={message.name} text = {message.text} /> );
  return <div className={style.messagesList}>{messageElements}</div>
};
export default MessagesList;
