import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
  console.log(props)
  return (
    <header className={style.header}>
      <img
        className={style.header__icon}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
      />
      <div className={style.login_block}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        
      </div>
    </header>
  );
};

export default Header;
