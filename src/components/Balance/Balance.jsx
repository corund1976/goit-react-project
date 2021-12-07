import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import BalanceModal from 'components/Modal/BalanceModal';
import BtnConfirmBalance from 'components/Balance/BtnConfirmBalance';

import { balanceSelectors } from 'redux/balance';

import s from './Balance.module.css';

const Balance = ({ displayStyle }) => {
  const initialBalance = useSelector(balanceSelectors.getBalance);
  
  const [input, setInput] = useState(initialBalance);

  const handleChange = e => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setInput(initialBalance);
  }, [initialBalance]);

  return (
    <div className={s.balance_form}>
      <p className={s.balance_title}>Баланс:</p>

      <span className={s.balance_value_span}>
        <input
          className={!displayStyle ? s.balance_value_none : s.balance_value}
          name='balance'
          pattern='^[ 0-9]+$'
          title='поле должно состоять только из цифр'
          type='number'
          value={input}
          onChange={handleChange}
        />
      </span>

      <BtnConfirmBalance
        input={input}
        displayStyle={displayStyle}
      />
      {!initialBalance &&
        <BalanceModal />}
    </div>
  );
};

export default Balance;
