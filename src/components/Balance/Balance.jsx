import { useState } from "react"
import s from './Balance.module.css'

const Balance = () => {
<<<<<<< Updated upstream
    const handleChange = e => {
        const [input, setInput]= useState('00.00')
      const input= setInput(e.target.value)
    }
    return (
        <div className={ s.balance_form}>
            <p className={s.balance_title}>Баланс:</p>
             <label > 
            Name
            <input className={s.balance_value}
              name="name"
=======
    const [input, setInput]= useState('00.00')
    const handleChange = e => {
        const inputValue = setInput(e.target.value)
    }
    return (
        <>
        <div className={ s.balance_form}>
            <p className={s.balance_title}>Баланс:</p>
              <input className={s.balance_value}
              name="balance"
>>>>>>> Stashed changes
              pattern="^[ 0-9]+$"
              title="поле должно состоять только из цифр"
              required
              type="text"
              placeholder="Введите баланс"
<<<<<<< Updated upstream
            value ={input}
              onChange={handleChange}
            />
          </label>

            <button type='submit' className={ s.balance_submit}>Подтвердить</button>
        </div>
=======
                    value={input}
              onChange={handleChange}
            />

            <button type='submit' className={ s.balance_submit}>Подтвердить</button>
            </div>
            </>
>>>>>>> Stashed changes
    )
}
export default Balance;