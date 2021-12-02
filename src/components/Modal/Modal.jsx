import s from "./Modal.module.css";
import closeBtn from "../../images/header-authform/closeBtn.png";
import authOperations from "redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const Modal = ({ onClick, title, children }) => {
  const dispatch = useDispatch();
  const portalModal = document.querySelector("#nodalRoot");

  // const handleLogOut = () => {
  //   dispatch(authOperations.handleLogout());
  //   onClick();
  // };

  const modalEscape = (e) => {
    if (e.code === "Escape") {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", modalEscape);
    return () => {
      window.removeEventListener("keydown", modalEscape);
    };
  }, []);

  const clickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      onClick();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={clickBackdrop}>
      <div className={s.exitModal}>
        <button type="button" className={s.closeBtn} onClick={onClick}>
          <img src={closeBtn} alt="closeButton" />
        </button>
        <div className={s.btnDiv}>
          <p className={s.modalTitle}>{title}</p>
          {/* <button type="button" onClick={handleLogOut} className={s.modalBtn}>
              Да
            </button> */}
          {children}
          <button type="button" className={s.modalBtn} onClick={onClick}>
            Нет
          </button>
        </div>
      </div>
    </div>,
    portalModal
  );
};

export default Modal;
