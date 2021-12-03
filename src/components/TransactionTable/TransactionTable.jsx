import { useDispatch, useSelector } from 'react-redux';
import cliTruncate from 'cli-truncate';

import {
	getIncomeTransactions,
	getExpenseTransactions,
} from 'redux/transactions/transactionSelectors';
import transactionOperations from 'redux/transactions/transactionOperations';
import s from './TransactionTable.module.css';

const TransactionTable = ({ transtype }) => {
	const incomes = useSelector(getIncomeTransactions);
	const expenses = useSelector(getExpenseTransactions);

	const transactions = transtype === 'доходы' ? incomes : expenses;

	const dispatch = useDispatch();

	const onDelete = transactionId => {
		dispatch(transactionOperations.handleDeleteTransaction(transactionId));
	};

	return (
		<div className={s.dataContainer}>
			<div className={(s.bodyTable, s.bodyTable320)}>
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
								<tr className={s.tr} key={item._id}>
									<td className={s.tdData}>{item.date}</td>

									<td className={s.tdDesc} data-tip={item.description}>
										{cliTruncate(item.description, 15)}
									</td>

									<td className={s.tdCateg}>{item.category}</td>

									<td
										className={
											(s.tdSum,
											transtype === 'доходы' ? s.tdSum : s.tdSumExpense)
										}
									>
										{transtype === 'доходы' ? `+` : `-`}
										{item.amount}.00 грн.
									</td>

									<td className={s.thIcon}>
										<button
											className={s.deleteBtn}
											onClick={() => onDelete(item._id)}
										>
											<svg
												className={s.deleteBtnIcon}
												width='18'
												height='18'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<g clipPath='url(#a)' fill='#52555F'>
													<path d='m16.308 4.023-.397-1.191a1.109 1.109 0 0 0-1.053-.759h-3.34V.986A.987.987 0 0 0 10.532 0H7.473a.987.987 0 0 0-.985.986v1.087h-3.34c-.478 0-.901.305-1.053.759l-.397 1.191a.894.894 0 0 0 .846 1.174h.415l.915 11.307c.068.839.78 1.496 1.62 1.496h7.203c.84 0 1.553-.657 1.62-1.496l.915-11.307h.23a.894.894 0 0 0 .846-1.174ZM7.543 1.055h2.92v1.018h-2.92V1.055Zm5.723 15.364a.575.575 0 0 1-.57.526H5.496a.575.575 0 0 1-.57-.526L4.017 5.197h10.157l-.908 11.222ZM2.77 4.143l.326-.977a.055.055 0 0 1 .052-.038h11.71c.024 0 .045.015.052.038l.326.977H2.77Z' />
													<path d='m11.585 16.381.027.001a.527.527 0 0 0 .527-.5l.495-9.506a.527.527 0 0 0-1.054-.055l-.495 9.506a.527.527 0 0 0 .5.554ZM5.891 15.883a.527.527 0 0 0 1.053-.057L6.426 6.32a.527.527 0 1 0-1.054.057l.519 9.506ZM9.009 16.382a.527.527 0 0 0 .527-.527V6.348a.527.527 0 1 0-1.054 0v9.507c0 .29.236.527.527.527Z' />
												</g>
												<defs>
													<clipPath id='a'>
														<path fill='#fff' d='M0 0h18v18H0z' />
													</clipPath>
												</defs>
											</svg>
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
