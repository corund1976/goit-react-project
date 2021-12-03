import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Section from "components/Section";
import Balance from "components/Balance";
import GoReports from "components/GoReports";
import Summary from "components/Summary";
import TransactionForm from "components/TransactionForm";
import TransactionTable from "components/TransactionTable";
import DeleteModal from "components/Modal/DeleteModal";

import {
  getExpenseTransactions,
  getIncomeTransactions,
} from "redux/transactions/transactionSelectors";

import s from "./ExpensePage.module.css";

function ExpensePage() {
  const [showModal, setShowModal] = useState(false); // Статус МОДАЛКИ "видима-невидима"
  const [transactionId, setTransactionId] = useState(""); // Id транзакции для УДАЛЕНИЯ

  const handleModal = (id) => {
    setShowModal((prevState) => !prevState);
    setTransactionId(id);
  };

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const transtype = pathname.slice(1);
  const expenses = useSelector(getExpenseTransactions);
  const incomes = useSelector(getIncomeTransactions);

  // useEffect(() => {
  // transtype === "expense"
  //   ? dispatch(transactionOperations.handleGetExpense())
  //   : dispatch(transactionOperations.handleGetIncome());
  // }, [transtype]);

  return (
    <Section>
      {showModal && (
        <DeleteModal
          toggleModal={handleModal} //статус модалки "видима-невидима"
          transtype={transtype} //тип транзакции доход/расход
          transactionId={transactionId} //Id транзакции для удаления
        />
      )}

      <div className={s.balanceHeader}>
        <Balance />
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
            <TransactionForm transtype={"расходы"} onHandleClick={() => {}} />

            <div className={s.tableContainer}>
              <div>
                <TransactionTable
                  transtype={"расходы"}
                  handleModal={handleModal}
                />
              </div>

              <div className={s.summaryDesck}>
                <Summary transtype={"расходы"} />
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel></TabPanel>
      </Tabs>
    </Section>
  );
}

export default ExpensePage;
