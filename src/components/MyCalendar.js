import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import CircularProgress from '@material-ui/core/CircularProgress';

const MyCalendar = ({
  setSelectDate,
  unavailableDates,
  getUnavailableDates,
}) => {
  const [date, setDate] = useState(new Date());
  const [endData, setEndData] = useState(null);

  const dates = unavailableDates.map((item) => {
    if (item.published) {
      let dateArr = []
      let start = new Date(item.date_start);
      let end = new Date(item.date_end);

      while(start<=end){
        let copiedDate = new Date(start.getTime());
        dateArr.push(copiedDate.toString().slice(4, 15))
        start.setDate(start.getDate() + 1)
      }
      return dateArr;
    }
  });

  const checkDate = (date,dates) =>{
    let result =false;
    dates.forEach(arr => {
      if(arr.find(element => element===date)){
        result =true
      }
    })
    return result
  }

  
  useEffect(() => {
    setSelectDate(date);
    // console.log(date)
  });

  const calendar = useRef(null);

  return (
    <div>
      {/* {!unavailableDates ? ( */}
      {/* <CircularProgress /> */}
      {/* ) : ( */}
      <Calendar
        ref={calendar}
        value={date}
        onChange={setDate}
        selectRange={true}
        tileClassName={({ activeStartDate, date, view }) =>
        checkDate(date.toString().slice(4, 15), dates)
            ? 'calendar unAnableDate'
            : 'calendar'
        }
      />
      {/* )} */}
    </div>
  );
};

export default MyCalendar;
