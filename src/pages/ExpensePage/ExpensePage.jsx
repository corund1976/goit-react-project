import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Section from 'components/Section';
import Balance from 'components/Balance';
import GoReports from 'components/GoReports';
import Summary from 'components/Summary';
import TransactionForm from 'components/TransactionForm';
import TransactionTable from 'components/TransactionTable';

import s from './ExpensePage.module.css';

function ExpensePage() {
	const [type, setType] = useState(false);

  return (
    <Section>
      <div className={ s.balanceHeader}>
        <Balance />
        <GoReports />
      </div>

      <Tabs className={s.tabs}>
        <TabList className={s.tabList}>
					<Tab
						selectedClassName={s.active}
						className={s.tab}
					>
						Расход
          </Tab>
          
          <NavLink to='/income'>
            <Tab
              // selectedClassName={s.active}
              className={s.tab}
            >
              Доход
            </Tab>
          </NavLink >

        </TabList>

        <TabPanel className={s.tabPanel}>
          <div className={s.tabPanelContainer}>

            <TransactionForm type='expenses' onHandleClick={() => { }} />
            
            <div className={s.tableContainer}>

              <TransactionTable transtype={'расходы'}/>

              <div className={s.summaryDesck}>
                <Summary transtype={'расходы'}/>
              </div>

            </div>
          </div>
        </TabPanel>
      </Tabs>
    </Section>
  );
}

export default ExpensePage;
