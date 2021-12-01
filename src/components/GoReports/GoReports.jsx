import { Link } from 'react-router-dom';
import barChart from "images/barChart.png";
import s from '../GoReports/GoReports.module.css'


const  GoReports = () => {
  return (
    <div>
      <Link to='/report' className={s.GoToReportsLink}> Перейти к отчетам <img src={barChart} alt="reports" className={ s.iconReport} /></Link >
    </div>
  )
};

export default GoReports;