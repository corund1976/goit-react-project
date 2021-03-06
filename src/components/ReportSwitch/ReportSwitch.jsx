import { category } from './categoryList';
import vector from 'images/VectorLeft.png';
import vectorRight from 'images/VectorRight.png';
import { fnForNumberDivide } from 'helpers/divideNumber';

import s from './ReportSwitch.module.css';

function ReportSwitch({
  activeTypeOfTransactions,
  handleChangeCategory,
  toggleActiveCategory,
  activeCategoryOfTransactions,
  arrTransactionsOfMonth,
}) {
  const elements = category
    // eslint-disable-next-line array-callback-return
    .map(({ title, svg }) => {
      const card = arrTransactionsOfMonth.find((item) => {
        return item[0] === title;
      });
      if (card !== undefined) {
        return (
          <li
            key={title}
            className={s.item}
            onClick={toggleActiveCategory}
            data-id={title}
          >
            <span className={s.sum}>
              {fnForNumberDivide(card[1].total)}грн.
            </span>
            <svg
              className={
                activeCategoryOfTransactions === title ? s.svg_active : s.svg
              }
            >
              <use href={svg} />
            </svg>
            <span className={s.title}>{title}</span>
            <div
              className={
                activeCategoryOfTransactions === title
                  ? s.backforsvg_active
                  : s.backForSvg
              }
            ></div>
          </li>
        );
      }
    })
    .filter((item) => item !== undefined);

  return (
    <div className={s.container}>
      <div className={s.switch_button}>
        <button
          type='button'
          onClick={() => handleChangeCategory()}
          className={s.button}
        >
          <span className={s.spanArrow}>
            <img src={vector} alt=''></img>
          </span>
        </button>

        <span className={s.transaction_title}>{activeTypeOfTransactions}</span>

        <button
          type='button'
          onClick={() => handleChangeCategory()}
          className={s.button}
        >
          <span className={s.spanArrow}>
            <img src={vectorRight} alt=''></img>
          </span>
        </button>
      </div>
      {!elements.length ? (
        <p className={s.no_data}>
          Нет транзакция по типу '
          {activeTypeOfTransactions === 'Расходы' ? 'расходы' : 'доходы'}' за
          выбранный период!
        </p>
      ) : (
        <ul className={s.list}>{elements}</ul>
      )}
    </div>
  );
}

export default ReportSwitch;
