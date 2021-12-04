import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import cliTruncate from "cli-truncate";
import { useWindowSize } from "react-use-size";

import {
  getIncomeTransactions,
  getExpenseTransactions,
} from "redux/transactions/transactionSelectors";

import s from "./TransactionTable.module.css";
import css from "./mobileMain.module.css";

const TransactionTable = ({ handleModal }) => {
  const incomes = useSelector(getIncomeTransactions);
  const expenses = useSelector(getExpenseTransactions);

  const { width } = useWindowSize();
  // Определяем тип обабатываемых транзакций в форме по ключевому слову в адресной строке
  const { pathname } = useLocation();
  const transtype = pathname.slice(1);
  // Наполняем ТРАНЗАКЦИИ в зависимости от типа выводимых в таблицу транзакций
  const transactions = transtype === "income" ? incomes : expenses;

  // Хендлер для извлечения и передачи ID транзакции для удаления "родителю"
  const onDelete = (e) => handleModal(e.currentTarget.id);
  const typeIncome = incomes.map((item) => {
    return { ...item, type: "income" };
  });
  const typeExpense = expenses.map((item) => {
    return { ...item, type: "expenses" };
  });
  const alltransactions = [...typeIncome, ...typeExpense];
  console.log(alltransactions, transtype);

  return (
    <div className={s.dataContainer}>
      {width > 767 && (
        <div className={(s.bodyTable, s.bodyTable320)}>
          <table className={s.main}>
            <thead className={s.theadTable}>
              <tr>
                <th className={(s.th, s.thData)}>Дата</th>
                <th className={(s.th, s.thDesc)}>Описание</th>
                <th className={(s.th, s.thCateg)}>Категория</th>
                <th className={(s.th, s.thSum)}>Сумма</th>
                <th className={(s.th, s.thIcon)}></th>
              </tr>
            </thead>
          </table>

          <div className={s.bodyTableScroll}>
            <table className={(s.main, s.mainTbody)}>
              <tbody>
                {transactions
                  .map((item) => (
                    <tr className={s.tr} key={item._id}>
                      <td className={s.tdData}>{item.date}</td>

                      <td className={s.tdDesc} data-tip={item.description}>
                        {cliTruncate(item.description, 15)}
                      </td>

                      <td className={s.tdCateg}>{item.category}</td>

                      <td
                        className={
                          (s.tdSum,
                          transtype === "income" ? s.tdSum : s.tdSumExpense)
                        }
                      >
                        {transtype === "income" ? `+` : `-`}
                        {item.amount}.00 грн.
                      </td>

                      <td className={s.thIcon}>
                        <button
                          className={s.deleteBtn}
                          id={item._id}
                          onClick={onDelete}
                        >
                          <svg
                            className={s.deleteBtnIcon}
                            width="18"
                            height="18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#a)" fill="#52555F">
                              <path d="m16.308 4.023-.397-1.191a1.109 1.109 0 0 0-1.053-.759h-3.34V.986A.987.987 0 0 0 10.532 0H7.473a.987.987 0 0 0-.985.986v1.087h-3.34c-.478 0-.901.305-1.053.759l-.397 1.191a.894.894 0 0 0 .846 1.174h.415l.915 11.307c.068.839.78 1.496 1.62 1.496h7.203c.84 0 1.553-.657 1.62-1.496l.915-11.307h.23a.894.894 0 0 0 .846-1.174ZM7.543 1.055h2.92v1.018h-2.92V1.055Zm5.723 15.364a.575.575 0 0 1-.57.526H5.496a.575.575 0 0 1-.57-.526L4.017 5.197h10.157l-.908 11.222ZM2.77 4.143l.326-.977a.055.055 0 0 1 .052-.038h11.71c.024 0 .045.015.052.038l.326.977H2.77Z" />
                              <path d="m11.585 16.381.027.001a.527.527 0 0 0 .527-.5l.495-9.506a.527.527 0 0 0-1.054-.055l-.495 9.506a.527.527 0 0 0 .5.554ZM5.891 15.883a.527.527 0 0 0 1.053-.057L6.426 6.32a.527.527 0 1 0-1.054.057l.519 9.506ZM9.009 16.382a.527.527 0 0 0 .527-.527V6.348a.527.527 0 1 0-1.054 0v9.507c0 .29.236.527.527.527Z" />
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h18v18H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                  .reverse()}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {width < 768 && (
        <ul className={css.alltransactions}>
          {alltransactions.map((item) => (
            <li className={css.transactions}>
              <div className={css.div}>
                <p className={css.description}>{item.description}</p>
                <span className={css.date}>{item.date}</span>
              </div>
              <p className={css.category}>{item.category} </p>
              <p
                className={
                  item.type === "income" ? css.amountIncome : css.amountExpense
                }
              >
                {item.amount} грн.
              </p>
              <button
                className={css.deleteBtn}
                id={item._id}
                onClick={onDelete}
              >
                <svg
                  className={s.deleteBtnIcon}
                  width="18"
                  height="18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#a)" fill="#52555F">
                    <path d="m16.308 4.023-.397-1.191a1.109 1.109 0 0 0-1.053-.759h-3.34V.986A.987.987 0 0 0 10.532 0H7.473a.987.987 0 0 0-.985.986v1.087h-3.34c-.478 0-.901.305-1.053.759l-.397 1.191a.894.894 0 0 0 .846 1.174h.415l.915 11.307c.068.839.78 1.496 1.62 1.496h7.203c.84 0 1.553-.657 1.62-1.496l.915-11.307h.23a.894.894 0 0 0 .846-1.174ZM7.543 1.055h2.92v1.018h-2.92V1.055Zm5.723 15.364a.575.575 0 0 1-.57.526H5.496a.575.575 0 0 1-.57-.526L4.017 5.197h10.157l-.908 11.222ZM2.77 4.143l.326-.977a.055.055 0 0 1 .052-.038h11.71c.024 0 .045.015.052.038l.326.977H2.77Z" />
                    <path d="m11.585 16.381.027.001a.527.527 0 0 0 .527-.5l.495-9.506a.527.527 0 0 0-1.054-.055l-.495 9.506a.527.527 0 0 0 .5.554ZM5.891 15.883a.527.527 0 0 0 1.053-.057L6.426 6.32a.527.527 0 1 0-1.054.057l.519 9.506ZM9.009 16.382a.527.527 0 0 0 .527-.527V6.348a.527.527 0 1 0-1.054 0v9.507c0 .29.236.527.527.527Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h18v18H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionTable;
