import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import s from './CalendarTableForm.module.css';

function CalendarTableForm({ dateHandle }) {
  const [date, setDate] = useState(new Date());
  
  dateHandle(date);

	return (
		<div className={s.calendarWrapper}>
			<span className={s.watch}></span>
			<DatePicker
				selected={date}
				onChange={(date) => setDate(date)}
				className={s.datePicker}
			/>
		</div>
	);
}

export default CalendarTableForm;
