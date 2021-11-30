import s from '../GoBack/GoBack.module.css'
import { Link } from 'react-router-dom';
import goBack from "images/goBack.png";
function GoBack() {
 
    return (
    <div>
      <Link to='/ExpensePage' className={s.goBackLink}> <img src={goBack} alt="reports" className={ s.iconBack} /> Вернуться на главную </Link >
    </div>
  )
};

export default GoBack;
