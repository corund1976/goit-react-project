import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import s from '../Calendar/Calendar.module.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function CalendarView() {
  const classes = useStyles();
  const date = new Date();
   const [selectedDate, setSelectedDate] = useState(`${date.getFullYear()}-${date.getMonth()+1}`);

  const handleDateChange = (e) => {
    const { value } = e.target;
    setSelectedDate(value);
    console.log(value)
  };

  return (
    <div className={ s.calendarBlock}>
      <p className={ s.calendarStyle}>Текущий период</p>
      <form className={classes.container} noValidate>
      <TextField
        id="date"
          type="month"
           format="MM/yyyy"
          defaultValue={ selectedDate}
          className={classes.textField}
          onChange={handleDateChange }
        InputLabelProps={{
          shrink: true,
        }}
      />
      </form>
    </div>  
  );
}
   
export default CalendarView;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import s from './Calendar.module.css';

// export default function Calendar() {
// 	const [startDate, setStartDate] = useState(new Date());
// 	const dispatch = useDispatch();

// 	const updateDate = date => {
// 		const year = String(date.getFullYear());
// 		const month = String(date.getMonth() + 1);
// 		const day = String(date.getDate());
// 	};

// 	const handleDateChange = date => {
// 		setStartDate(date);
// 		updateDate(date);
// 	};

// 	return (
// 		<div className={s.calendarWrapper}>
// 			<span className={s.watch}></span>
// 			<DatePicker
// 				dateFormat='dd.MM.yyyy'
// 				selected={startDate}
// 				onChange={handleDateChange}
// 				className={s.datePicker}
// 			/>
// 		</div>
// 	);
// }
