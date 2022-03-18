import style from "./Dialogs.module.css";
import NewMessage from "./Dialog/NewMessage/NewMessage";
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";

const Dialogs = (props) => {
  return (
    <div className="dialogsPage">
      <div className={style.dialogs}>
        <DialogsList dialogsData={props.state.dialogsData} />
        <MessagesList messagesData={props.state.messagesData} />
      </div>
      <NewMessage
        newMessageText={props.state.newMessageText}
        dispatch = {props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
