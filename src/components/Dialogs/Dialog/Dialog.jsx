import style from "./Dialog.module.css"
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    return (  
        <div>  
            <li className={style.dialog}>
            <NavLink className = {(navData) => navData.isActive ? style.active : '' } to = {"/dialogs/" + props.id}>{props.name}</NavLink>
            </li>
        </div>
    )};

export default Dialog;