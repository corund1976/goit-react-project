import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { Tab, TabList } from 'react-tabs';
import { useWindowSize } from 'react-use-size';

import Balance from 'components/Balance';
import GoReports from 'components/GoReports';
import Summary from 'components/Summary';
import TransactionForm from 'components/TransactionForm';
import TransactionTable from 'components/TransactionTable';
import UniversalModal from 'components/Modal/UniversalModal';

import transactionOperations from 'redux/transactions/transactionOperations';

import s from './HomePage.module.css';
import styles from 'components/Modal/Modal.module.css';

function HomePage() {
  const { width } = useWindowSize(); // Определяем размер окна пользователя
  const dispatch = useDispatch();
  // Извлекаем из адресной строки "income" или "expense"
  const { pathname } = useLocation();
  const transtype = pathname.slice(1);

  const [showModal, setShowModal] = useState(false); // Статус МОДАЛКИ 'видима-невидима'
  const [transactionId, setTransactionId] = useState(''); // Id транзакции для УДАЛЕНИЯ
  // Хендлер модалки пишет в стейт статус "видима-невидима" и id транзакции УДАЛИТЬ
  const handleModal = (id) => {
    setShowModal((prevState) => !prevState);
    setTransactionId(id);
  };
  // const toggleModal = () => {
  //   setShowModal((prevState) => !prevState);
  // };

  useEffect(() => {
    transtype === 'expense'
      ? dispatch(transactionOperations.handleGetExpense())
      : dispatch(transactionOperations.handleGetIncome());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transtype]);
  // Хендлер модалки "Удалить"
  const onDelete = () => {
    transtype !== 'expense'
      ? dispatch(transactionOperations.handleDeleteIncome(transactionId))
      : dispatch(transactionOperations.handleDeleteExpense(transactionId));
    handleModal();
  };

  return (
    <section className={s.sectionHomePage}>
      {showModal && (
        <UniversalModal handleModal={handleModal}>
          <p className={styles.modalTitle}>
            Вы уверены?
          </p>

          <button
            type='button'
            onClick={onDelete}
            className={styles.modalBtn}
          >
            Да
          </button>
        </UniversalModal>
      )}

      <div className={s.containerBalanceGoReports}>
        <Balance displayStyle={true} />
        <GoReports className={s.goReports}/>
      </div>

        <TabList className={s.containerTabsList}>
          <NavLink
            to='/expense'
            className={s.link}
            activeClassName={s.active}
          >
            <Tab className={s.tab}>
              Расход
            </Tab>
          </NavLink>

          <NavLink
            to='/income'
            className={s.link}
            activeClassName={s.active}
          >
            <Tab className={s.tab}>
              Доход
            </Tab>
          </NavLink>
        </TabList>

        <div className={s.containerFormTableSummary}>
          <TransactionForm />

          {/* <div> */}
          <div className={s.containerTableSummary}>

            <TransactionTable handleModal={handleModal} />
            {width > 1279 &&
              <div className={s.summary}>
                <Summary />
              </div>
            }
          </div>

        </div>

      {width > 767 & width < 1280 &&
        <div className={s.summary}>
          <Summary />
        </div>
      }
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
