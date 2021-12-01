import { useState } from "react"
import s from './Balance.module.css'
import { useDispatch } from 'react-redux';
import userOperations from '../../redux/user/userOperations'

const Balance = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('00.00')

    const handleChange = e => {
      setInput(e.target.value);
  }
   const addBalance = () => {
     const balance = Number(input);
     dispatch(userOperations.handleUpdateUserBalance({newBalance:balance}))
 
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
                  value={input}
            onChange={handleChange}
                      />
                      </span>
          <button type='button' className={s.balance_submit} onClick={ addBalance}>Подтвердить</button>
            </div>
            </>
    )
}
export default Balance;