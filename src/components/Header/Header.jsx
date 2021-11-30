import s from "./Header.module.css";
import logo from "../../images/header-authform/logo.png";
import defaultUserPhoto from "../../images/header-authform/defaultUserPhoto.jpg";
import logoutBtn from "../../images/header-authform/logoutBtn.png";
import { useSelector } from "react-redux";
import { getIsAuthorized, getUserEmail } from "redux/auth/authSelectors";
import { Link } from "react-router-dom";

const Header = () => {
  const isAuthorized = useSelector(getIsAuthorized);
  const userEmail = "sdfsf@gmail.com";
  // const userEmail = (useSelector(getUserEmail) || "");

  return (
    <header className={s.header}>
      <div className={s.navDiv}>
        <Link to="/">
          <img src={logo} alt="logo" className={s.defaultUserPhoto} />{" "}
        </Link>
        {isAuthorized === true && (
          <div className={s.userDiv}>
            <div className={s.userData}>
              <img
                src={defaultUserPhoto}
                alt="defaultUserPhoto"
                className={s.userPhoto}
              />
              <p className={s.userName}>{userEmail}</p>
            </div>
            <span className={s.span}></span>
            <button type="button" className={s.exitButton}>
              Выйти
            </button>
            <button type="button" className={s.mobileExitBtn}>
              <img src={logoutBtn} alt="logoutBtn" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
