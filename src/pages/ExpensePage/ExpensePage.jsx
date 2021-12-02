import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Section from "components/Section";
import Balance from "components/Balance";
import GoReports from "components/GoReports";
import Summary from "components/Summary";
import TransactionForm from "components/TransactionForm";
import TransactionTable from "components/TransactionTable";

import DeleteModal from "components/Modal/DeleteModal";

import s from "./ExpensePage.module.css";

function ExpensePage({ onClick }) {
  const [type, setType] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <Section>
      {showModal && <DeleteModal toggleModal={toggleModal} />}

      <div className={s.balanceHeader}>
        <Balance />
        <GoReports />
      </div>

      <Tabs className={s.tabs}>
        <TabList className={s.tabList}>
          <Tab selectedClassName={s.active} className={s.tab}>
            Расход
          </Tab>

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
            <TransactionForm type="expenses" onHandleClick={() => {}} />
            <TransactionForm transtype={"расходы"} onHandleClick={() => {}} />

            <div className={s.tableContainer}>
              <div>
                <TransactionTable transtype={"расходы"} />
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
