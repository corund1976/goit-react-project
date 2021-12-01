import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Section from "components/Section";
import Balance from "components/Balance";
import GoReports from "components/GoReports";
// import TransactionForm from "components/TransactionForm";
// import TransactionTable from "components/TransactionTable";
import Summary from "components/Summary";
import TransactionForm from 'components/TransactionForm';
import TransactionTable from 'components/TransactionTable';

import s from './IncomePage.module.css';

function IncomePage() {
  const [summary, setSummary] = useState([]);
	const [type, setType] = useState(false);

  return (
    <Section>
      <div>
        <Balance />
        <GoReports />
      </div>

      <Tabs className={s.tabs}>
        
        <TabList className={s.tabList}>
					<Tab
						selectedClassName={s.active}
						className={s.tab}
						onClick={() => setType(true)}
					>
						Расход
          </Tab>
          
					<Tab
						selectedClassName={s.active}
						className={s.tab}
						onClick={() => setType(false)}
					>
						Доход
          </Tab>
        </TabList>
               
				<TabPanel className={s.tabPanel}>
					<div className={s.tabPanelContainer}>
						<TransactionForm type='incomes' onHandleClick={() => {}} />
						<div className={s.tableContainer}>
							<TransactionTable type={type} />
							<div className={s.summaryDesck}>
								<Summary items={summary} />
							</div>
						</div>
					</div>
        </TabPanel>
        
			</Tabs>
    </Section>
  );
}

export default IncomePage;
