import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useSelector } from 'react-redux';
// import { transactionsSelectors } from '../../redux/transactions/';
import Summary from '../Summary/Summary';

import Form from 'components/IncomesForm/Form';
import Table from 'components/IncomesTable/Table';
import s from './BalanceViewTab.module.css';
// import { getSummary } from 'helpers';

export default function BalanceViewTab() {
	const [summary, setSummary] = useState([]);
	const [type, setType] = useState(false);
	// const year = useSelector(transactionsSelectors.getYear);
	// const incomeTrans = useSelector(transactionsSelectors.getIncTrans);
	// const expenseTrans = useSelector(transactionsSelectors.getOutTrans);

	// useEffect(() => {
	// 	getSummary(year, type, setSummary);
	// }, [type, year, incomeTrans, expenseTrans]);

	return (
		<>
			<Tabs className={s.tabs}>
				<TabList className={s.tabList}>
					<Tab
						selectedClassName={s.active}
						className={s.tab}
						onClick={() => setType(false)}
					>
						Расход
					</Tab>
					<Tab
						selectedClassName={s.active}
						className={s.tab}
						onClick={() => setType(true)}
					>
						Доход
					</Tab>
				</TabList>
				<TabPanel className={s.tabPanel}>
					<div className={s.tabPanelContainer}>
						<Form type='expenses' onHandleClick={() => {}} />
						<div className={s.tableContainer}>
							<Table type={type} />
							<div className={s.summaryDesck}>
								<Summary items={summary} />
							</div>
						</div>
					</div>
				</TabPanel>
				<TabPanel className={s.tabPanel}>
					<div className={s.tabPanelContainer}>
						<Form type='incomes' onHandleClick={() => {}} />
						<div className={s.tableContainer}>
							<Table type={type} />
							<div className={s.summaryDesck}>
								<Summary items={summary} />
							</div>
						</div>
					</div>
				</TabPanel>
			</Tabs>
			<section className={s.summaryTab}>
				<Summary items={summary} />
			</section>
		</>
	);
}