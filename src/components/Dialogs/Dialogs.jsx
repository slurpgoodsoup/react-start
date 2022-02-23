import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import NewMessage from "./Dialog/NewMessage/NewMessage";

const Dialogs = (props) => {
  return (
    <div className="dialogsPage">
      <div className={style.dialogs}>
        <div className={style.dialogsList}>
          <h1>Dialogs</h1>
          <ul>
            <Dialog name="Котек" />
            <Dialog name="Котек" />
            <Dialog name="Котек" />
            <Dialog name="Котек" />
            <Dialog name="Котек" />
          </ul>
        </div>
        <div className={style.messagesList}>
          <Message name="Котек" text="1" />
          <Message name="Котек" text="2" />
          <Message name="Котек" text="3" />
        </div>
      </div>
      <NewMessage />
    </div>
  );
};

export default Dialogs;
