import { useState } from "react"
import s from './Balance.module.css'

const Balance = () => {
    const [input, setInput]= useState('00.00')
    const handleChange = e => {
        const input = setInput(e.target.value)
    }
    return (
        <>
        <div className={ s.balance_form}>
            <p className={s.balance_title}>Баланс:</p>
             {/* <label > 
            Баланс: */}
            <input className={s.balance_value}
              name="balance"
              pattern="^[ 0-9]+$"
              title="поле должно состоять только из цифр"
              required
              type="text"
              placeholder="Введите баланс"
                    value={input}
              onChange={handleChange}
            />
          {/* </label> */}

            <button type='submit' className={ s.balance_submit}>Подтвердить</button>
            </div>
            </>
    )
}
export default Balance;