import style from "./Dialogs.module.css";
import NewMessageContainer from "./Dialog/NewMessage/NewMessageContainer";
import DialogsList from "./DialogsList/DialogsList";
import MessageListContainer from "./MessagesList/Message/MessageListContainer";

const Dialogs = (props) => {
  return (
    <div className="dialogsPage">
      <div className={style.dialogs}>
        <DialogsList dialogsData={props.state.dialogsData} />
        <MessageListContainer />
      </div>
      <NewMessageContainer
        // dispatch = {props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
