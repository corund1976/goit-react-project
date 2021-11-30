import s from "./IncomeExpenseTotal.module.css";

function IncomeExpenseTotal() {
  const fish = 1000;
  
  return (
    <div className={s.container}>
      <p className={s.title}>
        Расходы:&nbsp; <span className={s.outlayQuantityХ}>- {fish}</span>
      </p>
      <span className={s.vertical}></span>
      <p className={s.title}>
        Доходы: <span className={s.income}>&nbsp;+ {fish}</span>
      </p>
    </div>
  );
}

export default IncomeExpenseTotal;
