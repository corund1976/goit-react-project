import s from "./Modal.module.css";
import closeBtn from "../../images/header-authform/closeBtn.png";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { transactionOperations } from "redux/transactions";

const DeleteModal = ({ toggleModal, transtype, transactionId }) => {
  const dispatch = useDispatch();
  const portalModal = document.querySelector("#nodalRoot");

  const onDelete = () => {
    transtype === "expense"
      ? dispatch(transactionOperations.handleDeleteIncome(transactionId))
      : dispatch(transactionOperations.handleDeleteExpense(transactionId));
    toggleModal();
  };

  const modalEscape = e => {
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

  const clickBackdrop = event => {
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

          <p className={s.modalTitle}>Вы уверены?</p>

          <button
            type="button"
            onClick={onDelete}
            className={s.modalBtn}
          >
            Да
          </button>

          <button
            type="button"
            className={s.modalBtn}
            onClick={toggleModal}
          >
            Нет
          </button>

        </div>
      </div>
    </div>,
    portalModal
  );
};

export default DeleteModal;
