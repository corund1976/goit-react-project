import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Section from "components/Section";
import Balance from "components/Balance";
import GoReports from "components/GoReports";
import Summary from "components/Summary";
import TransactionForm from "components/TransactionForm";
import TransactionTable from "components/TransactionTable";
import BtnConfirmBalance from 'components/Balance/BtnConfirmBalance';
import UniversalModal from "components/Modal/UniversalModal";
import styles from "components/Modal/Modal.module.css";


import transactionOperations from 'redux/transactions/transactionOperations';
import categoriesOperations from 'redux/categories/categoriesOperations';

import s from './IncomePage.module.css';

function IncomePage() {
  const [showModal, setShowModal] = useState(false); // Статус МОДАЛКИ 'видима-невидима'
  const [transactionId, setTransactionId] = useState(''); // Id транзакции для УДАЛЕНИЯ
  
  const handleModal = (id) => {
    setShowModal((prevState) => !prevState);
    setTransactionId(id);
  };

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const transtype = pathname.slice(1);

  useEffect(() => {
    transtype === "expense"
      ? dispatch(transactionOperations.handleGetExpense())
      : dispatch(transactionOperations.handleGetIncome());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transtype]);

  const onDelete = () => {
    transtype === "expense"
      ? dispatch(transactionOperations.handleDeleteIncome(transactionId))
      : dispatch(transactionOperations.handleDeleteExpense(transactionId));
    handleModal();
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <Section>
      {showModal && (
        <UniversalModal toggleModal={toggleModal}>
          <p className={styles.modalTitle}>Вы уверены?</p>

          <button type="button" onClick={onDelete} className={styles.modalBtn}>
            Да
          </button>
        </UniversalModal>
      )}

      <div className={s.balanceHeader}>
        <Balance displayStyle={ true} />
        <GoReports />
      </div>

      <Tabs className={s.tabs}>
        <TabList className={s.tabList}>
          <NavLink to="/expense">
            <Tab
              // selectedClassName={s.active}
              className={s.tab}
            >
              Расход
            </Tab>
          </NavLink>

          <NavLink to="/income">
            <Tab
              // selectedClassName={s.active}
              className={s.tab}
            >
              Доход
            </Tab>
          </NavLink>
        </TabList>

        <TabPanel className={s.tabPanel}>
          <div className={s.tabPanelContainer}>

            <TransactionForm onHandleClick={() => { }} />

            <div className={s.tableContainer}>
                <TransactionTable handleModal={handleModal} />

              <div className={s.summaryDesck}>
                <Summary />
              </div>

            </div>
          </div>
        </TabPanel>

        <TabPanel></TabPanel>
      </Tabs>
    </Section>
  );
}

export default IncomePage;
