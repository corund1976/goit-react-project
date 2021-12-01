import { useState } from "react"
import s from './Balance.module.css'
import { useDispatch } from 'react-redux';
import userOperations from '../../redux/user/userOperations'

const Balance = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('00.00')
  const [balance, setBalance] =useState('0')
    const handleChange = e => {
      setInput(e.target.value);
  }
   const addBalance = e => {
     e.preventDefault();
     const balance = Number(e.target.value);
     dispatch(userOperations.handleUpdateUserBalance({balance}))
     setBalance(balance)
      }
    return (
        <>
        <div className={ s.balance_form}>
            <p className={s.balance_title}>Баланс:</p>
             <span className={s.balance_value_span}>
            <input className={s.balance_value}
              name="balance"
              pattern="^[ 0-9]+$"
              title="поле должно состоять только из цифр"
              type="number"
              // maxLength='8'
                  value={input}
            onChange={handleChange}
                      />
                      </span>
          <button type='submit' className={s.balance_submit} onClick={ addBalance}>Подтвердить</button>
            </div>
            </>
    )
}
export default Balance;