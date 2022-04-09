import style from './Nav.module.css'
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li className={style.navList__el}>
          <NavLink className = {(navData) => navData.isActive ? style.active : '' } to = "/profile">Profile</NavLink>
        </li>
        <li className={style.navList__el}>
        <NavLink className = {(navData) => navData.isActive ? style.active : '' }  to = "/dialogs">Messages</NavLink>
        </li>
        <li className={style.navList__el}>
        <NavLink className = {(navData) => navData.isActive ? style.active : ''}  to = "/news">News</NavLink>
        </li>
        <li className={style.navList__el}>
        <NavLink className = {(navData) => navData.isActive ? style.active : ''}  to = "/music">Music</NavLink>
        </li>
        <li className={style.navList__el}>
        <NavLink className = {(navData) => navData.isActive ? style.active : ''}  to = "/settings">Settings</NavLink>
        </li>
        <li className={style.navList__el}>
        <NavLink className = {(navData) => navData.isActive ? style.active : ''}  to = "/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  )};

export default Nav;
