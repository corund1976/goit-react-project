import { useSelector } from "react-redux";
import {
  getIncomeExpenseMonthStats,
  getIncomeIncomeMonthStats,
} from "redux/transactions/transactionSelectors";
import s from "./Summary.module.css";
function Summary({ transtype = "расходы" }) {
  const summaryIncomes = useSelector(getIncomeExpenseMonthStats);
  const summaryExpenses = useSelector(getIncomeIncomeMonthStats);
  // const summaryExpenses = {};
  // const summaryIncomes = {};
  const elements =
    transtype === "расходы"
      ? Object.entries(summaryExpenses)
      : Object.entries(summaryIncomes);
  const markup = elements.map(([month, sum]) => {
    return (
      <li key={month} className={s.item}>
        <span className={s.month}>{month}</span>
        <span className={s.sum}>{sum}</span>
      </li>
    );
  });
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>{transtype}</h2>
      <ul className={s.list}>{markup}</ul>
    </div>
  );
}

export default Summary;
