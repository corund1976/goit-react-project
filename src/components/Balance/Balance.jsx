import { useState } from "react"
import s from './Balance.module.css'
import { useDispatch, useSelector } from 'react-redux';
import userOperations from 'redux/user/userOperations';
import { getUpdateBalance } from 'redux/user/userSelectors';

const Balance = () => {
  const balance=useSelector(getUpdateBalance)
  const dispatch = useDispatch();
  const [input, setInput] = useState(balance)
  
    const handleChange = e => {
      setInput(e.target.value);
  }
  const addBalance = () => {
     const balance = Number(input);
     dispatch(userOperations.handleUpdateUserBalance({newBalance: balance}))
    }
    return (
        
        <div className={ s.balance_form}>
            <p className={s.balance_title}>Баланс:</p>
             <span className={s.balance_value_span}>
            <input className={s.balance_value}
              name="balance"
              pattern="^[ 0-9]+$"
              title="поле должно состоять только из цифр"
              type="number"
                  value={input}
            onChange={handleChange}
                      />
                      </span>
          <button type='button' className={s.balance_submit} onClick={ addBalance}>Подтвердить</button>
            </div>
            
    )
}
export default Balance;