import style from "./Dialogs.module.css";
import NewMessageContainer from "./Dialog/NewMessage/NewMessageContainer";
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";

const Dialogs = (props) => {
  return (
    <div className="dialogsPage">
      <div className={style.dialogs}>
        <DialogsList dialogsData={props.state.dialogsData} />
        <MessagesList messagesData={props.state.messagesData} />
      </div>
      <NewMessageContainer
        newMessageText={props.state.newMessageText}
        dispatch = {props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
