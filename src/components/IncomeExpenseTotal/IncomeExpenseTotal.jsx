import s from "./IncomeExpenseTotal.module.css";
import { useSelector } from "react-redux";

import {
  totalExpensesOfMonthSelector,
  totalIncomesOfMonthSelector,
} from "redux/trans_month_stats/trans_month_stats-selectors";

import { fnForNumberDivide } from "helpers/divideNumber";
function IncomeExpenseTotal() {
  const expense = useSelector(totalExpensesOfMonthSelector);
  const income = useSelector(totalIncomesOfMonthSelector);
  return (
    <div className={s.container}>
      <p className={s.title}>
        <div>
          Расходы:&nbsp;{" "}
        </div>
        <span className={s.outlayQuantityХ}>
          - {fnForNumberDivide(expense)} грн.
        </span>
      </p>
      <span className={s.vertical}></span>
      <p className={s.title}>
        <div>
          Доходы:{" "}
        </div>
        <span className={s.income}>
          &nbsp;+ {fnForNumberDivide(income)} грн.
        </span>
      </p>
    </div>
  );
}

export default IncomeExpenseTotal;
