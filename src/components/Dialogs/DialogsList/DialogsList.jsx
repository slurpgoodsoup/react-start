import style from "./DialogsList.module.css";
import Dialog from "../Dialog/Dialog";

const DialogsList = (props) => {
  let dialogElements = props.dialogsData.map((dialog) => ( <Dialog key={dialog.id} name={dialog.name} />
  ));
  return (
    <div className={style.dialogsList}>
      <h1>Dialogs</h1>
      <ul>{dialogElements}</ul>
    </div>
  );
};

export default DialogsList;
