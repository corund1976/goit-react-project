import s from "./IncomeExpenseTotal.module.css";

function IncomeExpenseTotal() {
  const fish = 1000;
  return (
    <div className={s.container}>
      <p className={s.title}>
        Расходы:&nbsp; <spam className={s.outlayQuantityХ}>- {fish}</spam>
      </p>
      <span className={s.vertical}></span>
      <p className={s.title}>
        Доходы: <span className={s.income}>&nbsp;+ {fish}</span>
      </p>
    </div>
  );
}

export default IncomeExpenseTotal;
