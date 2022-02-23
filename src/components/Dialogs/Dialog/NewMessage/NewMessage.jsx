import style from './NewMessage.module.css'

const newMessage = () => {
  return (
    <div className={style.newMessage}>
      <textarea
        className={style.newMessage__textarea}
        placeholder="Ну че там.."
      ></textarea>
      <button className={style.newMessage__btn}>Send</button>
    </div>
  )};

export default newMessage;
