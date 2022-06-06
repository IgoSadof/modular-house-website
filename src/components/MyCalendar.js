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

  // console.log(date)

  

  let url = 'https://modhouse.herokuapp.com/dates';
  const getDates = async (url) => {
    let response = await fetch(url);
    let dates = await response.json();
    let datesList = dates.map((item) => item.date);
    getUnavailableDates(datesList);
  };

  useEffect(() => {
    getDates(url);
    setSelectDate(date)
  }, [url]);
  useEffect(() => {
    setSelectDate(date)
    // console.log(date)
  });
  const calendar = useRef(null);

  return (
    <div>
      {!unavailableDates ? (
        <CircularProgress />
      ) : (
        <Calendar
          ref={calendar}
          value={date}
          onChange={setDate}
          tileClassName='calendar'
          selectRange={true}
          // onClickDay={(value, event) => handleClick(value, event)}
        />
      )}
    </div>
  );
};

export default MyCalendar;
