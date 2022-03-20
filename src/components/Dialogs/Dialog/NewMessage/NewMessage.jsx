import style from "./NewMessage.module.css";
import React from "react";

let newref = React.createRef();

const newMessage = (props) => {

  let onMessageChange = () => {
    let newMessageText = newref.current.value;
    props.onMessageChange(newMessageText)
  };

  let sendMessage = () => {
    props.sendMessage()
  };

  return (
    <div className={style.newMessage}>
      <textarea
        onChange={onMessageChange}
        ref={newref}
        value={props.currentText}
        className={style.newMessage__textarea}
        placeholder="Ну че там.."
      ></textarea>
      <button className={style.newMessage__btn} onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default newMessage;
