import s from "./Header.module.css";
import logo from "../../images/logo.png";
import defaultUserPhoto from "../../images/defaultUserPhoto.jpg";
import logoutBtn from "../../images/logoutBtn.png";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.navDiv}>
        {/* <p className={s.logo}>Kapu$ta</p> */}
        <img src={logo} alt="logo" className={s.defaultUserPhoto} />
        <div className={s.userDiv}>
          <div className={s.userData}>
            <img
              src={defaultUserPhoto}
              alt="defaultUserPhoto"
              className={s.userPhoto}
            />
            <p className={s.userName}>Hi, username!</p>
          </div>
          <span className={s.span}></span>
          <button type="button" className={s.exitButton}>
            Выйти
          </button>
          <button type="button" className={s.mobileExitBtn}>
            <img src={logoutBtn} alt="logoutBtn" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
