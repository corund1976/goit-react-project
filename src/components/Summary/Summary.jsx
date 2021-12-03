import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { getIncomeMonthStats, getExpenseMonthStats }
  from 'redux/transactions/transactionSelectors';

import s from './Summary.module.css';

function Summary() {
  // Определяем тип обабатываемых транзакций в форме по ключевому слову в адресной строке
  const { pathname } = useLocation();
  const transtype = pathname.slice(1);
  // Формируем объект для записи РАЗНЫХ значений статистики в таблицу
  const summaryIncomes = useSelector(getIncomeMonthStats);
  const summaryExpenses = useSelector(getExpenseMonthStats);
  // Берем оттуда значения помесячно и формируем массив для вывода в таблицу
  const elements =
    transtype === 'expense' // 'income' or 'expense'
      ? Object.entries(summaryExpenses)
      : Object.entries(summaryIncomes);
  // Делаем разметку из полученных эдементов и ПЕРЕВОРАЧИВАЕМ ее
  const markup = elements.map(([month, sum]) => {
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
