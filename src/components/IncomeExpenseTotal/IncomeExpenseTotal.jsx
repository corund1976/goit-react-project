import s from "./IncomeExpenseTotal.module.css";
import { useSelector } from "react-redux";

import {
  getIncomeIncomeMonthStats,
  getIncomeExpenseMonthStats,
} from "redux/transactions/transactionSelectors";

function IncomeExpenseTotal() {
  const expense = useSelector(getIncomeExpenseMonthStats);
  const income = useSelector(getIncomeIncomeMonthStats);

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
