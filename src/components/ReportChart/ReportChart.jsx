import PageTitle from "components/PageTitle/PageTitle";
import s from "./ReportChart.module.css";

function ReportChart({ activeCategory, activeTrancaction }) {
  // const arrExpenses = useSelector(
  //   (state) => state.transaction.period_data.expenses.incomesData
  // );

  // const arrIncomes = useSelector(
  //   (state) => state.transaction.period_data.expenses.incomesData
  // );
  const arrExpenses = {
    Транспорт: {
      total: 4000,
      СТО: 3500,
      Мойка: 500,
    },
    "Всё для дома": {
      total: 1200,
      Вазон: 150,
      "Шкаф-купе": 1050,
    },
    Здоровье: {
      total: 1200,
      Вазон: 150,
      "Шкаф-купе": 1050,
    },
    "Коммуналка и связь": {
      total: 1200,
      Вазон: 150,
      "Шкаф-купе": 1050,
    },
    Образование: {
      total: 4000,
      СТО: 3500,
      Мойка: 500,
    },
    Алкоголь: {
      total: 1200,
      Вазон: 150,
      "Шкаф-купе": 1050,
    },
    Продукты: {
      total: 1200,
      Вазон: 150,
      "Шкаф-купе": 1050,
    },
    Прочее: {
      total: 1200,
      Вазон: 150,
      "Шкаф-купе": 1050,
    },
  };
  const arrIncomes = {
    "З/П": {
      total: 12000,
      Аванс: 5000,
      Основная: 7000,
    },
  };

  const arrForFilter =
    activeTrancaction === "Расходы" ? arrExpenses : arrIncomes;
  const cards = Object.entries(arrForFilter);
  let markup = "";
  const elements = cards.find((item) => item[0] === activeCategory);
  if (elements) {
    markup = Object.entries(elements[1])
      .splice(1)
      .map((item) => {
        return (
          <li key={item[0]} className={s.item}>
            <span className={s.sum}>{item[1]}.00</span>
            <div
              className={s.graph}
              style={{
                width: 40,
                height: item[1] * 0.05,
              }}
            ></div>
            <span className={s.title}>{item[0]}</span>
          </li>
        );
      });
  }

  return <ul className={s.list}>{markup}</ul>;
}

export default ReportChart;
