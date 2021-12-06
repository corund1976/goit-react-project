import { useEffect } from "react";
import { createPortal } from "react-dom";

import closeBtn from "images/header-authform/closeBtn.png";
import s from "./Modal.module.css";

const ErrorModal = ({ toggleErrorModal, children }) => {
  const portalModal = document.querySelector("#nodalRoot");
  
  const clickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      toggleErrorModal();
    }
  };

  const modalEscape = (e) => {
    if (e.code === "Escape") {
      toggleErrorModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", modalEscape);
    return () => {
      window.removeEventListener("keydown", modalEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div className={s.backdropErrorModal} onClick={clickBackdrop}>
      <div className={s.exitErrorModal}>
        <button type="button" className={s.closeBtn} onClick={toggleErrorModal}>
          <img src={closeBtn} alt="closeButton" />
        </button>

        <div className={s.btnDiv}>{children}</div>
      </div>
    </div>,
    portalModal
  );
};

export default ErrorModal;
