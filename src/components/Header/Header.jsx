import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img
        className={style.header__icon}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
      />
    </header>
  );
};

export default Header;
