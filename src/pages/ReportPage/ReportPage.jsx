// import { useSelector } from 'react-redux';

import Section from 'components/Section';
import GoBack from 'components/GoBack';
import Balance from 'components/Balance';
import Calendar from 'components/Calendar';
import IncomeExpenseTotal from 'components/IncomeExpenseTotal';
import ReportSwitch from 'components/ReportSwitch';
import ReportChart from 'components/ReportChart';

// import s from './ReportPage.module.css';

function ReportPage () {
  return (
    <Section>
      <div>
        <GoBack />
        <Balance />
        <Calendar />
      </div>

      <IncomeExpenseTotal />
      <ReportSwitch />
      <ReportChart />
    </Section>
  );
};

export default ReportPage;