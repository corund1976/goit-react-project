import { Link } from 'react-router-dom';

import s from './GoBack.module.css'
import goBack from 'images/goBack.png';

function GoBack() {
  return (
    <Link to='/expense' className={s.goBackLink}>
      <img
        src={goBack}
        alt='go back to reports'
        className={s.iconBack}
      />
      Вернуться на главную
    </Link >
  )
};

export default GoBack;
