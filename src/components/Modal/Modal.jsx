import s from "./Modal.module.css";
import closeBtn from "../../images/header-authform/closeBtn.png";
import authOperations from "redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";

const Modal = ({ onClick, title }) => {
  const dispatch = useDispatch();
  const portalModal = document.querySelector("#nodalRoot");

  const handleLogOut = () => {
    dispatch(authOperations.handleLogout());
    onClick();
  };

  return createPortal(
    <div className={s.modalDiv}>
      <div className={s.backdrop}>
        <div className={s.exitModal}>
          <button type="button" className={s.closeBtn} onClick={onClick}>
            <img src={closeBtn} alt="closeButton" />
          </button>
          <div className={s.btnDiv}>
            <p className={s.modalTitle}>{title}</p>
            <button type="button" onClick={handleLogOut} className={s.modalBtn}>
              Да
            </button>
            <button type="button" className={s.modalBtn} onClick={onClick}>
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>,
    portalModal
  );
};

export default Modal;
