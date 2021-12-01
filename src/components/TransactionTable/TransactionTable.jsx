import React from 'react';
import cliTruncate from 'cli-truncate';
import s from './TransactionTable.module.css';
import deleteIcon from 'images/svg/delete.svg';

const TransactionTable = ({ type }) => {
	let transactions = [
		{
			id: 1,
			date: '2021/11/09 17:17:01',
			description: 'Посуда',
			category: 'Все для дома',
			amount: '980 UAH',
		},
		{
			id: 2,
			date: '2021/11/09 17:17:02',
			description: 'Мясо',
			category: 'Продукты',
			amount: '550 UAH',
		},
		{
			id: 3,
			date: '2021/11/09 21:10:02',
			description: 'Сауна',
			category: 'Развлечения',
			amount: '900 UAH',
		},
		{
			id: 4,
			date: '2021/11/09 21:10:01',
			description: 'Масаж',
			category: 'Здоровье',
			amount: '300 UAH',
		},
	];

	return (
		<div className={s.tableContainer}>
			<table className={s.table}>
				<thead className={s.headerTable}>
					<tr className={s.tableTh}>
						<th className={s.tableTh}>Дата</th>
						<th className={s.tableTh}>Описание</th>
						<th className={s.tableTh}>Категория</th>
						<th className={s.tableTh}>Сумма</th>
						<th className={s.tableTh}></th>
					</tr>
				</thead>
				<tbody>
					{transactions.map(item => (
						<tr className={s.tr} key={item._id}>
							<td>{`${item.date}.${item.month}.${item.year}`}</td>
							<td data-tip={item.description}>
								{cliTruncate(item.description, 15)}
							</td>

							<td>{item.category}</td>
							<td
								className={
									item.typeOftransactions ? s.amountGreen : s.amountRed
								}
							>
								{!item.typeOftransactions && `- `}
								{item.amount}
							</td>
							<td>
								<button type='button' className={s.deleteBtn}>
									<img className={s.icon} src={deleteIcon} alt='Delete icon' />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TransactionTable;
