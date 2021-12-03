import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

import logo from "images/header-authform/logo.png";
import logoutBtn from "images/header-authform/logoutBtn.png";
import { getIsAuthorized } from "redux/auth/authSelectors";
import { getUserEmail } from "redux/user/userSelectors";

import s from "./Header.module.css";

const Header = ({ onClick }) => {
  const isAuthorized = useSelector(getIsAuthorized);
  const userEmail = useSelector(getUserEmail);

  return (
    <>
      <header className={s.header}>
        <div className={s.navDiv}>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className={s.defaultUserPhoto}
            />
          </Link>

          {isAuthorized && (
            <div className={s.userDiv}>
              <div className={s.userData}>
                <Avatar
                  sx={{ bgcolor: deepOrange[400] }}
                  alt={userEmail}
                  src="/broken-image.jpg"
                  className={s.userPhoto}
                />
                <p className={s.userName}>{isAuthorized && userEmail}</p>
              </div>

              <span className={s.span}></span>

              <button
                type="button"
                className={s.exitButton}
                onClick={onClick}
              >
                Выйти
              </button>

              <button
                type="button"
                className={s.mobileExitBtn}
                onClick={onClick}
              >
                <img src={logoutBtn} alt="logoutBtn" />
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
