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

import s from './IncomePage.module.css';

function IncomePage() {
	const [type, setType] = useState(false);

  return (
    <Section>
      <div>
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

					<Tab
						selectedClassName={s.active}
						className={s.tab}
					>
						Доход
          </Tab>
        </TabList>
               
				<TabPanel className={s.tabPanel}>
          <div className={s.tabPanelContainer}>
            
            <TransactionForm type='incomes' onHandleClick={() => { }} />
            
            <div className={s.tableContainer}>
              
              <TransactionTable transtype={'доходы'}/>
              
							<div className={s.summaryDesck}>
								<Summary transtype={'доходы'}/>
              </div>
              
						</div>
					</div>
        </TabPanel>
        
			</Tabs>
    </Section>
  );
}

export default IncomePage;
