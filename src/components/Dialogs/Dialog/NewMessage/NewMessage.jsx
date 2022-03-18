import style from "./NewMessage.module.css";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../state'

let newref = React.createRef();

const newMessage = (props) => {

  let onMessageChange = () => {
    let newMessageText = newref.current.value;
    props.dispatch(updateNewMessageTextActionCreator(newMessageText));
  };

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  return (
    <div className={style.newMessage}>
      <textarea
        onChange={onMessageChange}
        ref={newref}
        value={props.newMessageText}
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
