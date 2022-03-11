import style from './Message.module.css'

const Message = (props) => {
    return(
        <div className={style.message}>
        <img
          className={style.message__photo}
          src="https://vjoy.cc/wp-content/uploads/2020/04/50059_19633152-7566413-image-a-56_1570908569851.jpg"
        />
        <p className={style.message__name}>{props.name}</p>
        <p className={style.message__text}>{props.text}</p>
      </div>
    )};

export default Message;