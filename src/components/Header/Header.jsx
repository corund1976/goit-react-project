import s from "./Header.module.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.navDiv}>
        {/* <p className={s.logo}>Kapu$ta</p> */}
        <img src={logo} alt="logo" />
        <div className={s.userDiv}>
          <p className={s.userName}>Hi, username!</p>
          <span className={s.span}></span>
          <button type="button" className={s.exitButton}>
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
