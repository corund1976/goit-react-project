import React from 'react';
import cliTruncate from 'cli-truncate';
// import s from './TransactionTable.module.css';
import s from './Table.module.css';
import deleteIcon from 'images/svg/delete.svg';

const TransactionTable = ({ type }) => {
	let transactions = [
		{
			id: 1,
			date: '2021/11/09',
			description: 'Посуда',
			category: 'Все для дома',
			amount: '980 UAH',
		},
		{
			id: 2,
			date: '2021/11/09',
			description: 'Мясо',
			category: 'Продукты',
			amount: '550 UAH',
		},
		{
			id: 3,
			date: '2021/11/09',
			description: 'Сауна',
			category: 'Развлечения',
			amount: '900 UAH',
		},
		{
			id: 4,
			date: '2021/11/09',
			description: 'Масаж',
			category: 'Здоровье',
			amount: '300 UAH',
		},
		{
			id: 4,
			date: '2021/11/09',
			description: 'Масаж',
			category: 'Здоровье',
			amount: '300 UAH',
		},
		{
			id: 4,
			date: '2021/11/09',
			description: 'Масаж',
			category: 'Здоровье',
			amount: '300 UAH',
		},
		{
			id: 4,
			date: '2021/11/09',
			description: 'Масаж',
			category: 'Здоровье',
			amount: '300 UAH',
		},
		{
			id: 4,
			date: '2021/11/09',
			description: 'Масаж',
			category: 'Здоровье',
			amount: '300 UAH',
		},
		{
			id: 4,
			date: '2021/11/09',
			description: 'Масаж',
			category: 'Здоровье',
			amount: '300 UAH',
		},
		{
			id: 4,
			date: '2021/11/09',
			description: 'Масаж',
			category: 'Здоровье',
			amount: '300 UAH',
		},
		{
			id: 4,
			date: '2021/11/09',
			description: 'Масаж',
			category: 'Здоровье',
			amount: '300 UAH',
		},
		{
			id: 4,
			date: '2021/11/09',
			description: 'Элит Масаж',
			category: 'Здоровье',
			amount: '1000 UAH',
		},
	];

	return (
		// <div className={s.tableContainer}>
		// 	<table className={s.table}>
		// 		<thead className={s.headerTable}>
		// 			<tr>
		// 				<th className={s.tableTh}>Дата</th>
		// 				<th className={s.tableTh}>Описание</th>
		// 				<th className={s.tableTh}>Категория</th>
		// 				<th className={s.tableTh}>Сумма</th>
		// 				<th className={s.tableTh}></th>
		// 			</tr>
		// 		</thead>
		// 	</table>

		// 	<div className={s.bodyTableScroll}>
		// 		<table className={s['transactionListTable listTableBorder']}>
		// 			<tbody>
		// 				{transactions.map(item => (
		// 					<tr className={s.tr} key={item._id}>
		// 						<td
		// 							className={s['td thData']}
		// 						>{`${item.date}.${item.month}.${item.year}`}</td>
		// 						<td className={s['td thDesk']} data-tip={item.description}>
		// 							{cliTruncate(item.description, 15)}
		// 						</td>

		// 						<td className={s.thDesc}>{item.category}</td>
		// 						<td
		// 							className={
		// 								(s.thSum,
		// 								item.typeOftransactions ? s.amountGreen : s.amountRed)
		// 							}
		// 						>
		// 							{!item.typeOftransactions && `- `}
		// 							{item.amount}
		// 						</td>
		// 						<td>
		// 							<button type='button' className={s.deleteBtn}>
		// 								<img
		// 									className={s.icon}
		// 									src={deleteIcon}
		// 									alt='Delete icon'
		// 								/>
		// 							</button>
		// 						</td>
		// 					</tr>
		// 				))}
		// 			</tbody>
		// 		</table>
		// 	</div>
		// </div>
		<div className={s.dataContainer}>
			<div className={s.bodyTable}>
				<table className={s.main}>
					<thead className={s.theadTable}>
						<tr>
							<th className={(s.th, s.thData)}>Дата</th>
							<th className={(s.th, s.thDesc)}>Описание</th>
							<th className={(s.th, s.thCateg)}>Категория</th>
							<th className={(s.th, s.thSum)}>Сумма</th>
							<th className={(s.th, s.thIcon)}></th>
						</tr>
					</thead>
				</table>

				<div className={s.bodyTableScroll}>
					<table className={(s.main, s.mainTbody)}>
						<tbody>
							{transactions.map(item => (
								<tr className={s.td} key={item._id}>
									<td
										className={s.thData}
									>{`${item.dat}.${item.month}.${item.year}`}</td>
									<td className={s.tdDesk} data-tip={item.description}>
										{cliTruncate(item.description, 15)}
									</td>

									<td className={s.thCateg}>{item.category}</td>
									<td
										className={
											item.typeOftransactions ? s.tdSum : s.tdSumExpence
										}
									>
										{!item.typeOftransactions && `- `}
										{item.amount}
									</td>
									<td>
										<button type='button' className={s.thIcon}>
											<img
												className={s.icon}
												src={deleteIcon}
												alt='Delete icon'
											/>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TransactionTable;
