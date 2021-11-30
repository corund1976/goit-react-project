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
