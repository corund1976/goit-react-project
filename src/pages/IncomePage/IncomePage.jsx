import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Section from 'components/Section';
import Balance from 'components/Balance';
import GoReports from 'components/GoReports';
import Summary from 'components/Summary';
import TransactionForm from 'components/TransactionForm';
import TransactionTable from 'components/TransactionTable';
import DeleteModal from 'components/Modal/DeleteModal';

import transactionOperations from 'redux/transactions/transactionOperations';
import categoriesOperations from 'redux/categories/categoriesOperations';

import s from './IncomePage.module.css';

function IncomePage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionOperations.handleGetIncome());
    dispatch(transactionOperations.handlePostIncome());
    dispatch(categoriesOperations.handleGetIncomeCategories());
  }, [dispatch]);

  return (
    <Section>
      {showModal && <DeleteModal toggleModal={toggleModal} />}

      <div className={ s.balanceHeader}>
        <Balance />
        <GoReports />
      </div>

      <Tabs className={s.tabs}>
        
        <TabList className={s.tabList}>
          <NavLink to='/expense'>
            <Tab
              // selectedClassName={s.active}
              className={s.tab}
            >
              Расход
            </Tab>
          </NavLink >

          <NavLink to='/income'>
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
            
            <TransactionForm transtype={'доходы'} onHandleClick={() => { }} />
            
            <div className={s.tableContainer}>
              
              <TransactionTable transtype={'доходы'} onClick={toggleModal}/>
              
							<div className={s.summaryDesck}>
								<Summary transtype={'доходы'}/>
              </div>
              
						</div>
					</div>
        </TabPanel>
        <TabPanel> </TabPanel>
			</Tabs>
    </Section>
  );
}

export default IncomePage;
