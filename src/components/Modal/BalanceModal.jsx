import s from "./BalanceModal.module.css";

const BalanceModal = () => {
  return (
    <div className={s.fixedModal}>
      <div className={s.modalDiv}>
        <p className={s.largeText}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={s.littleText}>
          Ты не можешь тратить деньги пока их у тебя нет :)
        </p>
      </div>
    </div>
  );
};

export default BalanceModal;
