import { useState } from "react";
import s from "./Balance.module.css";
import { useDispatch, useSelector } from "react-redux";

import userOperations from "redux/user/userOperations";
import { getBalance } from "redux/balance/balanceSelectors";
import BalanceModal from "./BalanceModal";

const Balance = () => {
  const initialBalance = useSelector(getBalance);
  const [input, setInput] = useState(initialBalance);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const dispatch = useDispatch();

  const addBalance = () => {
    const newBalance = Number(input);
    dispatch(
      userOperations.handleUpdateUserBalance({ newBalance: newBalance })
    );
  };

  return (
    <div className={s.balance_form}>
      <p className={s.balance_title}>Баланс:</p>
      <span className={s.balance_value_span}>
        <input
          className={s.balance_value}
          name="balance"
          pattern="^[ 0-9]+$"
          title="поле должно состоять только из цифр"
          type="number"
          value={input}
          onChange={handleChange}
        />
      </span>
      <button type="button" className={s.balance_submit} onClick={addBalance}>
        Подтвердить
      </button>
      {/* {!initialBalance && <BalanceModal />} */}
      {/* <BalanceModal /> */}
    </div>
  );
};

export default Balance;
