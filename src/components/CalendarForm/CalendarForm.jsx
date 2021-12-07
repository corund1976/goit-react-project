import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import s from './CalendarForm.module.css';

function CalendarForm({ dateHandle }) {
  const [date, setDate] = useState(new Date());
  
  dateHandle(date);

	return (
		<div className={s.calendarWrapper}>
			<span className={s.watch}></span>
			<DatePicker
				selected={date}
        onChange={(date) => setDate(prev => date)}
        className={s.datePicker}
				dateFormat='dd/MM/yyyy'
			/>
		</div>
	);
}

export default CalendarForm;
