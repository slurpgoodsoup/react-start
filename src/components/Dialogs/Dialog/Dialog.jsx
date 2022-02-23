import style from "./Dialog.module.css"

const Dialog = (props) => {
    return (  
        <div>  
            <li className={style.dialog}><a href = "#">{props.name}</a></li>
        </div>
    )};

export default Dialog;