import style from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li className={style.navList__el}>
          <a href="#">Profile</a>
        </li>
        <li className={style.navList__el}>
          <a href="#">Messages</a>
        </li>
        <li className={style.navList__el}>
          <a href="#">News</a>
        </li>
        <li className={style.navList__el}>
          <a href="#">Music</a>
        </li>
        <li className={style.navList__el}>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  )};

export default Nav;
