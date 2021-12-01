import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./ReportSwitch.module.css";
import { category } from "./categoryList";
import sprite from "../../images/category_svg/sprite.svg";
import {
  expensesOfMonthSelector,
  incomesOfMonthSelector,
} from "redux/trans_month_stats/trans_month_stats-selectors";

function ReportSwitch({ getActiveCategory }) {
  const [typeOfTransaction, setTypeOfTransaction] = useState("Расходы"); //"Расходы" , "Доходы"
  const [activeCategory, setActiveCategory] = useState("");

  const cbOnClick = () => {
    typeOfTransaction === "Расходы"
      ? setTypeOfTransaction("Доходы")
      : setTypeOfTransaction("Расходы");
  };

  const toggleClass = (e) => {
    setActiveCategory(e.target.closest("LI").dataset.id);
    getActiveCategory(e.target.closest("LI").dataset.id, typeOfTransaction);
  };

  const arrExpenses = useSelector(expensesOfMonthSelector);

  const arrIncomes = useSelector(incomesOfMonthSelector);

  const arrForFilter =
    typeOfTransaction === "Расходы" ? arrExpenses : arrIncomes;
  const cards = arrForFilter === undefined ? [] : Object.entries(arrForFilter);

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
        <button type='button' onClick={cbOnClick} className={s.button}>
          <svg className={s.wrapper}>
            <use href={`${sprite}#arrow-left`} />
          </svg>
        </button>
        <span className={s.transaction_title}>{typeOfTransaction}</span>
        <button type='button' onClick={cbOnClick} className={s.button}>
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
