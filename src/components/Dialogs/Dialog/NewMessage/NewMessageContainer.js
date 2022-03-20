import NewMessage from "./NewMessage";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/dialogsReducer'
const newMessageContainer = (props) => {

  let onMessageChange = (newMessageText) => {
    props.dispatch(updateNewMessageTextActionCreator(newMessageText));
  };

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  return (
   <NewMessage sendMessage = {sendMessage} onMessageChange = {onMessageChange} currentText = {props.newMessageText}/>
  );
};

export default newMessageContainer;
