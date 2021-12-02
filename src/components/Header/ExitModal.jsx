import s from "./Header.module.css";
import closeBtn from "../../images/header-authform/closeBtn.png";
import authOperations from "redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ExitModal = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleLogOut = () => {
    dispatch(authOperations.handleLogout());
    // setIsModalOpen(false);
  };

  return (
    <div className={s.modalDiv}>
      {/* {isModalOpen === true && ( */}
      <div className={s.backdrop}>
        <div className={s.exitModal}>
          <button type="button" className={s.closeBtn}>
            <img src={closeBtn} alt="closeButton" />
          </button>
          <div className={s.btnDiv}>
            <p className={s.modalTitle}>Вы действительно хотите выйти?</p>
            <button type="button" onClick={handleLogOut} className={s.modalBtn}>
              Да
            </button>
            <button
              type="button"
              className={s.modalBtn}
              onClick={() => setIsModalOpen(false)}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default ExitModal;
