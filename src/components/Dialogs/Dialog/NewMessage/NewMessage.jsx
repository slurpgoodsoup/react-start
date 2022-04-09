import style from "./NewMessage.module.css";
import React from "react";

let newref = React.createRef();
let newrefBtn = React.createRef();

const newMessage = (props) => {
  
  let onMessageChange = () => {
    let newMessageText = newref.current.value;
    props.onMessageChange(newMessageText)
  };

  let sendMessage = () => {
    props.sendMessage()
  };

  // let messageElements = props.messagesData.map(message => <Message id={message.id} name={message.name} text = {message.text} />)
  return (
    <div className={style.newMessage}>
      <textarea
        onChange={onMessageChange}
        ref={newref}
        value={props.currentText}
        className={style.newMessage__textarea}
        placeholder="Ну че там.."
      ></textarea>
      <button ref = {newrefBtn} className={style.newMessage__btn} onClick={sendMessage}>
        Send
      </button>
      {/* <div className={style.messagesList}>{messageElements}</div> */}
    </div>
  );
};

export default newMessage;
