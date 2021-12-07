import { useSelector } from 'react-redux';

import { reportsSelectors } from 'redux/reports';

import { fnForNumberDivide } from 'helpers/divideNumber';

import s from './IncomeExpenseTotal.module.css';

function IncomeExpenseTotal() {
  const expense = useSelector(reportsSelectors.totalExpensesOfMonthSelector);
  const income = useSelector(reportsSelectors.totalIncomesOfMonthSelector);

  return (
    <div className={s.container}>
      
      <div className={s.title}>
        <div>
          Расходы:&nbsp;{' '}
        </div>
        <span className={s.outlayQuantityХ}>
          - {fnForNumberDivide(expense)} грн.
        </span>
      </div>

      <span className={s.vertical}></span>
      <div className={s.title}>
        <div>
          Доходы:{' '}
        </div>
        <span className={s.income}>
          &nbsp;+ {fnForNumberDivide(income)} грн.
        </span>
      </div>

    </div>
  );
}

export default IncomeExpenseTotal;
