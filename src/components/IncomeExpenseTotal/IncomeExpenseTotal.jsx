import s from "./IncomeExpenseTotal.module.css";
import { useSelector } from "react-redux";

import {
  totalExpensesOfMonthSelector,
  totalIncomesOfMonthSelector,
} from "redux/trans_month_stats/trans_month_stats-selectors";

function IncomeExpenseTotal() {
  const expense = useSelector(totalExpensesOfMonthSelector);
  const income = useSelector(totalIncomesOfMonthSelector);

  return (
    <div className={s.container}>
      <p className={s.title}>
        Расходы:&nbsp; <span className={s.outlayQuantityХ}>- {expense}</span>
      </p>
      <span className={s.vertical}></span>
      <p className={s.title}>
        Доходы: <span className={s.income}>&nbsp;+ {income}</span>
      </p>
    </div>
  );
}

export default IncomeExpenseTotal;
