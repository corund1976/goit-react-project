import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./ReportSwitch.module.css";
import { category } from "./categoryList";
import sprite from "../../images/category_svg/sprite.svg";

function ReportSwitch({ getActiveCategory }) {
  const [typeOfTransaction, setTypeOfTransaction] = useState("Расходы"); //"Расходы" , "Доходы"
  const [activeCategory, setActiveCategory] = useState("");

  const cbOnClick = () => {
    typeOfTransaction === "Расходы"
      ? setTypeOfTransaction("Доходы")
      : setTypeOfTransaction("Расходы");
  };

  const toggleClass = (e) => {
    // console.log(e.target.closest("LI").dataset.id);
    setActiveCategory(e.target.closest("LI").dataset.id);
    getActiveCategory(e.target.closest("LI").dataset.id, typeOfTransaction);
  };

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
    typeOfTransaction === "Расходы" ? arrExpenses : arrIncomes;
  const cards = Object.entries(arrForFilter);
  // _______________________________________________
  //   {
  //   "incomes": {
  //     "total": 12000,
  //     "incomesData": {
  //       "З/П": {
  //         "total": 12000,
  //         "Аванс": 5000,
  //         "Основная": 7000
  //       }
  //     }
  //   },
  //   "expenses": {
  //     "total": 5200,
  //     "incomesData": {
  //       "Транспорт": {
  //         "total": 4000,
  //         "СТО": 3500,
  //         "Мойка": 500
  //       },
  //       "Всё для дома": {
  //         "total": 1200,
  //         "Вазон": 150,
  //         "Шкаф-купе": 1050
  //       }
  //     }
  //   }
  // }
  // _________________________________________________

  const elements = category
    .map(({ title, svg }) => {
      const card = cards.find((item) => {
        return item[0] === title;
      });
      if (card !== undefined) {
        return (
          <li
            key={title}
            className={s.item}
            onClick={toggleClass}
            data-id={title}
          >
            <span className={s.sum}>{card[1].total}.00</span>
            <svg className={activeCategory === title ? s.svg_active : s.svg}>
              <use href={svg} />
            </svg>
            <span className={s.title}>{title}</span>
          </li>
        );
      }
    })
    .filter((item) => item !== undefined);

  return (
    <>
      <div className={s.switch_button}>
        <button type="button" onClick={cbOnClick} className={s.button}>
          <svg className={s.wrapper}>
            <use href={`${sprite}#arrow-left`} />
          </svg>
        </button>
        <span className={s.transaction_title}>{typeOfTransaction}</span>
        <button type="button" onClick={cbOnClick} className={s.button}>
          <svg className={s.wrapper}>
            <use href={`${sprite}#arrow-right`} />
          </svg>
        </button>
      </div>
      <ul className={s.list}>{elements}</ul>
    </>
  );
}

export default ReportSwitch;
