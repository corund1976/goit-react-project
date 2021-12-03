import s from "./Modal.module.css";
import closeBtn from "../../images/header-authform/closeBtn.png";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const UniversalModal = ({ toggleModal, children }) => {
  const portalModal = document.querySelector("#nodalRoot");

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {children}

          <button type="button" className={s.modalBtn} onClick={toggleModal}>
            Нет
          </button>
        </div>
      </div>
    </div>,
    portalModal
  );
};

export default UniversalModal;
