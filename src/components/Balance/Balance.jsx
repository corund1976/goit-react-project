import { useState } from "react"
import s from './Balance.module.css'

const Balance = () => {
    const [input, setInput]= useState('00.00')
    const handleChange = e => {
      setInput(e.target.value);
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
                    <button type='submit' className={ s.balance_submit}>Подтвердить</button>
            </div>
            </>
    )
}
export default Balance;