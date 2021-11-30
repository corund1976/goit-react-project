import s from "./Summary.module.css";
function Summary({ transtype = "расходы" }) {
  // для прикладу роботиБ в проб версії стерти
  const obj = {
    Январь: 5,
    Февраль: 100,
    Март: "N/A",
    Апрель: "N/A",
    Май: 1,
    Июнь: "N/A",
    Июль: 3,
    Август: "N/A",
    Сентябрь: "N/A",
    Октябрь: 77,
    Ноябрь: "N/A",
    Декабрь: 123,
  };
  // для прикладу роботиБ в проб версії стерти

  // const summaryIncomes = useSelector((state) => state.incomes.monthStats);
  // const summaryExpenses = useSelector((state) => state.expenses.monthStats);

  const elements =
    transtype === "расходы"
      ? // для прикладу роботиБ в проб версії стерти
        Object.entries(obj)
      : Object.entries(obj);
  // для прикладу роботиБ в проб версії стерти

  // ? Object.entries(summaryExpenses)
  // : Object.entries(summaryIncomes);
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
