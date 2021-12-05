import { Link, useLocation } from 'react-router-dom';

import goBack from 'images/goBack.png';
import s from './GoBack.module.css'

function GoBack() {
  const { pathname } = useLocation();
  const currentPath = pathname.slice(1);

  return (
    <Link
      to={currentPath === 'report' ? '/expense' : 'main'}
      className={s.goBackLink}>
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
