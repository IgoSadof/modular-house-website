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
  const dates = unavailableDates.map((item)=>{
    return new Date(item.date).toString().slice(4,15)
  })
  useEffect(() => {
    setSelectDate(date)
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
          tileClassName={({ activeStartDate, date, view }) => dates.includes(date.toString().slice(4,15))? 'calendar unAnableDate' : 'calendar'}
        />
      {/* )} */}
    </div>
  );
};

export default MyCalendar;
