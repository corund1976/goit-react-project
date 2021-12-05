import { Link } from 'react-router-dom';

import BarChart from "images/BarChart.svg";
import s from './GoReports.module.css'


const  GoReports = () => {
  return (
    <div className={ s.divToReports}>
      <Link
        to='/report'
        className={s.GoToReportsLink}
      >
        Перейти к отчетам
        <img
          src={BarChart}
          alt="reports"
          className={s.iconReport}
        />
      </Link >
    </div>
  )
};

export default GoReports;