import style from "./Dialogs.module.css";
import NewMessage from "./Dialog/NewMessage/NewMessage";
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList"

const Dialogs = (props) => {
  return (
    <div className="dialogsPage">
      <div className={style.dialogs}>
        <DialogsList dialogDsata = {props.dialogDsata} />
        <MessagesList messagesData = {props.messagesData}/>
      </div>
      <NewMessage />
    </div>
  );
};

export default Dialogs;
