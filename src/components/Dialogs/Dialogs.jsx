import NewMessageContainer from "./Dialog/NewMessage/NewMessageContainer";
import DialogsList from "./DialogsList/DialogsList";
import MessageListContainer from "./MessagesList/Message/MessageListContainer";
import style from "./Dialogs.module.css"
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  if (!props.isAuth) return <Navigate to="/login"/>
  return (
    <div className="dialogsPage">
      <div className={style.dialogs}>
        <DialogsList dialogsData={props.dialogsData} />
        <MessageListContainer />
      </div>
      <NewMessageContainer
        // dispatch = {props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
