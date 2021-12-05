import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { Tab, TabList } from "react-tabs";
import { useWindowSize } from "react-use-size";

import Balance from "components/Balance";
import GoReports from "components/GoReports";
import Summary from "components/Summary";
import TransactionForm from "components/TransactionForm";
import TransactionTable from "components/TransactionTable";
import UniversalModal from "components/Modal/UniversalModal";
import GoBack from "components/GoBack";

import transactionOperations from "redux/transactions/transactionOperations";

import s from "./HomePage.module.css";
import styles from "components/Modal/Modal.module.css";

function HomePage() {
  const dispatch = useDispatch();
  // Определяем размер окна пользователя
  const { width } = useWindowSize();
  // Извлекаем из адресной строки 'income' или 'expense'
  const { pathname } = useLocation();
  const transtype = pathname.slice(1);
  // Статус МОДАЛКИ 'видима-невидима' и Id транзакции для УДАЛЕНИЯ
  const [showModal, setShowModal] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [date, setdate] = useState("");
  // Хендлер модалки 'Удалить' пишет в стейт статус 'видима-невидима' и id транзакции УДАЛИТЬ
  const toggleModal = () => setShowModal((prevState) => !prevState);
  // Хендлер модалки 'Удалить' из определенного массива транзикций
  const onDelete = () => {
    transtype !== "expense"
      ? dispatch(transactionOperations.handleDeleteIncome(transactionId))
      : dispatch(transactionOperations.handleDeleteExpense(transactionId));
    toggleModal();
  };
  // Хендлер модалки 'Удалить' ловит событие при нажатии на "корзину" и
  // получает из таблицы Id иранзакции и делает модалки "видимой"
  const handleDelete = (id) => {
    setShowModal((prevState) => !prevState);
    setTransactionId(id);
  };

  useEffect(() => {
    transtype === "expense"
      ? dispatch(transactionOperations.handleGetExpense())
      : dispatch(transactionOperations.handleGetIncome());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transtype]);

  function getDate(date) {
    setdate(date);
  }

  console.log(date, "date");
  return (
    <section className={s.sectionHomePage}>
      {showModal && (
        <UniversalModal toggleModal={toggleModal}>
          <p className={styles.modalTitle}>Вы уверены?</p>

          <button type="button" onClick={onDelete} className={styles.modalBtn}>
            Да
          </button>
        </UniversalModal>
      )}
      {width > 767 && (
        <div className={s.containerBalanceGoReports}>
          <Balance displayStyle={true} />
          <GoReports className={s.goReports} />
        </div>
      )}

      {width > 767 && (
        <TabList className={s.containerTabsList}>
          <NavLink to="/expense" className={s.link} activeClassName={s.active}>
            <Tab className={s.tab_left}>Расход</Tab>
          </NavLink>

          <NavLink to="/income" className={s.link} activeClassName={s.active}>
            <Tab className={s.tab}>Доход</Tab>
          </NavLink>
        </TabList>
      )}

      <div className={s.containerFormTableSummary}>
        {transtype === "income" && (
          <>
            <GoBack />
            <TransactionForm customDate={date} />
          </>
        )}

        {transtype === "expense" && (
          <>
            <GoBack />
            <TransactionForm customDate={date} />
          </>
        )}

        {width < 767 && transtype === "main" && (
          <div className={s.containerBalanceGoReports}>
            <Balance displayStyle={true} />
            <GoReports className={s.goReports} />
          </div>
        )}

        {width < 767 && transtype === "main" && (
          <TabList className={s.containerTabsList}>
            <NavLink
              to="/expense"
              className={s.link}
              activeClassName={s.active}
            >
              <Tab className={s.tab_left}>Расход</Tab>
            </NavLink>

            <NavLink to="/income" className={s.link} activeClassName={s.active}>
              <Tab className={s.tab}>Доход</Tab>
            </NavLink>
          </TabList>
        )}

        <div className={s.containerTableSummary}>
          <TransactionTable getDate={getDate} handleDelete={handleDelete} />
          {width > 1279 && (
            <div className={s.summary}>
              <Summary />
            </div>
          )}
        </div>
      </div>
      {!!((width > 767) & (width < 1280)) && (
        <div className={s.summary}>
          <Summary />
        </div>
      )}
    </section>
  );
}

export default HomePage;

// import { useWindowSize } from 'react-use-size';
// const { width } = useWindowSize();

// <Container>
//   {width > 767 && (
//     <div>
//       <Balance />
//       <GoReports />
//     </div>
//   )}

//   <TransactionContainer>
//     <TransactionForm />
//     <div >
//       {width > 767 && <TransactionTable />}
//       {width > 767 && <Summary />}
//     </div>
//   </TransactionContainer>
// </Container>

// import React from 'react';
// import { Redirect } from 'react-router-dom';

// import { routes } from 'routes';

// const HomePage = () => {
//   return (
//     <Redirect to={routes.expense} />
//   );
// };

// export default HomePage;
