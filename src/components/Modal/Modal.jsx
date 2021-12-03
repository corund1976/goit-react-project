import s from "./Modal.module.css";
import closeBtn from "../../images/header-authform/closeBtn.png";
import authOperations from "redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const Modal = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const portalModal = document.querySelector("#nodalRoot");

  const handleLogOut = () => {
    dispatch(authOperations.handleLogout());
    toggleModal();
  };

  const modalEscape = (e) => {
    if (e.code === "Escape") {
      toggleModal();
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
      toggleModal();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={clickBackdrop}>
      <div className={s.exitModal}>
        <button type="button" className={s.closeBtn} onClick={toggleModal}>
          <img src={closeBtn} alt="closeButton" />
        </button>
        <div className={s.btnDiv}>
          <p className={s.modalTitle}>Вы действительно хотите выйти?</p>
          <button type="button" onClick={handleLogOut} className={s.modalBtn}>
            Да
          </button>
          <button type="button" className={s.modalBtn} onClick={toggleModal}>
            Нет
          </button>
        </div>
      </div>
    </div>,
    portalModal
  );
};

export default Modal;
