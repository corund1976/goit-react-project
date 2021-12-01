import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './CalendarTableForm.module.css';

function CalendarTableForm() {
	const [startDate, setStartDate] = useState(new Date());
	const dispatch = useDispatch();

	const updateDate = date => {
		const year = String(date.getFullYear());
		const month = String(date.getMonth() + 1);
		const day = String(date.getDate());
	};

	const handleDateChange = date => {
		setStartDate(date);
		updateDate(date);
	};

	return (
		<div className={s.calendarWrapper}>
			<span className={s.watch}></span>
			<DatePicker
				dateFormat='dd.MM.yyyy'
				selected={startDate}
				onChange={handleDateChange}
				className={s.datePicker}
			/>
		</div>
	);
}

export default CalendarTableForm;