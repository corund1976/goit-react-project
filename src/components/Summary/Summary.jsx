import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import {
  getIncomeMonthStats,
  getExpenseMonthStats,
} from "redux/transactions/transactionSelectors";

import s from "./Summary.module.css";

function Summary() {
  const { pathname } = useLocation();
  const transtype = pathname.slice(1);

  const summaryIncomes = useSelector(getIncomeMonthStats);
  const summaryExpenses = useSelector(getExpenseMonthStats);

  const elements =
    transtype === "expense" // "income" or "expense"
      ? Object.entries(summaryExpenses)
      : Object.entries(summaryIncomes);
  const markup = elements
    .map(([month, sum]) => {
      return (
        <li key={month} className={s.item}>
          <span className={s.month}>{month}</span>
          <span className={s.sum}>{sum}</span>
        </li>
      );
    })
    .reverse();

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>{transtype}</h2>
      <ul className={s.list}>{markup}</ul>
    </div>
  );
}

export default Summary;
