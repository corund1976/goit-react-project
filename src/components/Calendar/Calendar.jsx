import React, { useState } from "react";
import s from "../Calendar/Calendar.module.css";
import { getPeriod } from "redux/trans_month_stats/trans_month_stats-thunk";
import { useDispatch } from "react-redux";
import  vector  from 'images/VectorLeft.png'
import  vectorRight  from 'images/VectorRight.png'

const monthsArr = [
  {
  id: 1, label: 'январь'
},
  { id: 2, label: 'февраль'},
  { id: 3, label: 'март' },
    { id: 4, label: 'апрель' },
    { id: 5, label: 'май' },
    { id: 6, label: 'июнь' },
    { id: 7, label: 'июль' },
  { id: 8, label: 'август' },
  { id: 9, label: 'сентябрь' },
   { id: 10, label: 'октябрь' },
   { id: 11, label: 'ноябрь'},
    { id: 12, label: 'декабрь'},
]

const CalendarView = () => {
    const dispatch = useDispatch();
  const [nameMonth, setNameMonth] = useState(monthsArr.find(el => el.id === (new Date().getMonth() + 1)))
  const [year, setYear]=useState((new Date().getFullYear()))
  const [selectedDate, setSelectedDate] = useState(
  `${year}-${nameMonth.id}`
  );
  
  const nextMnth = () => {
    if (nameMonth.id < monthsArr.length)
      setNameMonth(monthsArr[nameMonth.id])
      
    else {
      setNameMonth(monthsArr[0])
      setYear(year + 1)
    }
    setSelectedDate(`${year}-${(nameMonth.id).toString().padStart(2, "0")}`)
         dispatch(getPeriod(selectedDate));
  }

  const prevNext = () => {
    const dateIndex = monthsArr.indexOf(nameMonth)
    if (dateIndex > 0)
      setNameMonth(monthsArr[dateIndex - 1])
    else {
      setNameMonth(monthsArr[monthsArr.length - 1])
      setYear(year-1)
    }
    setSelectedDate(`${year}-${nameMonth.id.toString().padStart(2, "0")}`)
         dispatch(getPeriod(selectedDate));
  
}
  return (
    <div >
      <p className={s.calendarStyle}>Текущий период</p>
      <div className={ s.divCalendar}>
        <button onClick={prevNext} className={s.btnMonth}> <span className={ s.spanArrow}><img src={vector} alt='go to previous month icon'></img></span></button>
      <span className={s.monthName}>{nameMonth?.label} {year}</span>
         <button onClick={nextMnth} className={ s.btnMonth}>  <span><img src={vectorRight} alt='go to previous month icon'></img></span></button>  
     </div>
      </div>
    );
  }


export default CalendarView;
//==============Alternative Calendar View============================///
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// function CalendarView() {
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   const date = new Date();
//   const [selectedDate, setSelectedDate] = useState(
//     `${date.getFullYear()}-${date.getMonth() + 1}`
//   );

//   const handleDateChange = (e) => {
//     const { value } = e.target;
//     setSelectedDate(value);
//     console.log(value);
//     dispatch(getPeriod(value));
//   };

//   return (
//     <div className={s.calendarBlock}>
//       <p className={s.calendarStyle}>Текущий период</p>
//       <form className={classes.container} noValidate>
//         <TextField
//           id="date"
//           type="month"
//           format="MM/yyyy"
//           defaultValue={selectedDate}
//           className={classes.textField}
//           onChange={handleDateChange}
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//       </form>
//     </div>
//   );
// }
