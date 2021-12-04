import { useState } from "react";
import s from "./Balance.module.css";
import { useDispatch, useSelector } from "react-redux";
import BtnConfirmBalance from "./BtnConfirmBalance";
import { getBalance } from "redux/balance/balanceSelectors";
import BalanceModal from "../Modal/BalanceModal";

const Balance = ({ displayStyle }) => {
  const initialBalance = useSelector(getBalance);
  const [input, setInput] = useState(initialBalance);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={s.balance_form}>
      <p className={s.balance_title}>Баланс:</p>

      <span className={s.balance_value_span}>
        <input
          className={!displayStyle ? s.balance_value_none : s.balance_value}
          name="balance"
          pattern="^[ 0-9]+$"
          title="поле должно состоять только из цифр"
          type="number"
          value={input}
          onChange={handleChange}
        />
      </span>

      <BtnConfirmBalance input={input} displayStyle={displayStyle} />
      {!initialBalance && <BalanceModal />}
    </div>
  );
};

export default Balance;
