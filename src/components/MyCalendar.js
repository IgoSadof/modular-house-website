import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import CircularProgress from '@material-ui/core/CircularProgress';

const MyCalendar = ({
  setSelectDate,
  unavailableDates,
  getUnavailableDates,
}) => {
  const today = new Date();
  const [value, onChange] = useState(
    new Date(today.getFullYear(), today.getMonth(), today.getDate())
  );
  const [startData, setStartData] = useState(null);
  const [endData, setEndData] = useState(null);

  // const handleClick = (value, e) => {
  //   if (e.target.tagName.toLowerCase() === 'button') {
  //     // console.log(value)
  //     if (startData) {
  //       setStartData({value:value,textDate: e.target.children[0].getAttribute('aria-label')});
  //     } else {
  //       fillRange(startData, {value:value,textDate: e.target.children[0].getAttribute('aria-label')});
  //       setEndData({value:value,textDate: e.target.children[0].getAttribute('aria-label')});
  //     }
  //     setSelectDate({ date: e.target.children[0].getAttribute('aria-label') });
  //   } else {
  //     console.log(value.getDate())
  //     setSelectDate({ date: e.target.getAttribute('aria-label') });
  //   }
  // };
  // const chooseDataRange = (startData, endData = '') => {};

  const handleClick = (value, e) => {
    console.log(calendar.current);
    if (!startData) {
      setStartData({
        value: value,
        textDate: e.target.children[0]?.getAttribute('aria-label')
          ? e.target.children[0].getAttribute('aria-label')
          : e.target.getAttribute('aria-label'),
      });
    } else if ((startData && !endData) && value.getDay()!==startData.value.getDay()) {
      fillRange(startData, {
        value: value,
        textDate: e.target.children[0]?.getAttribute('aria-label')
          ? e.target.children[0].getAttribute('aria-label')
          : e.target.getAttribute('aria-label'),
      });
      setEndData({
        value: value,
        textDate: e.target.children[0]?.getAttribute('aria-label')
          ? e.target.children[0].getAttribute('aria-label')
          : e.target.getAttribute('aria-label'),
      });
    } else if (startData && endData) {
      resetDays();
      setStartData({
        value: value,
        textDate: e.target.children[0]?.getAttribute('aria-label')
          ? e.target.children[0].getAttribute('aria-label')
          : e.target.getAttribute('aria-label'),
      });
      setEndData(null);
    }
  };

  const fillRange = (startData, endData) => {
    let days = document.getElementsByClassName('react-calendar__tile');
    let daysArr = Array.from(days);
    // let daysValueArr = Array.from(daysArr.map((item) => item.value));
    // console.log(startData.value.getDate(), endData.value.getDate());
    // console.log(daysValueArr);
    let fill = false;
    daysArr.forEach((item) => {
      // console.log(item);
      if (
        startData.textDate === item.children[0].getAttribute('aria-label') ||
        endData.textDate === item.children[0].getAttribute('aria-label')
      ) {
        fill = !fill;
      }
      if (fill) {
        item.classList.add('dataRange');
      }
    });
  };
  const resetDays = () => {
    let days = document.getElementsByClassName('react-calendar__tile');
    let daysArr = Array.from(days);
    daysArr.forEach((item) => {
      if (item.classList.contains('dataRange')) {
        item.classList.remove('dataRange');
      }
    });
  };
  useEffect(() => {
    if (unavailableDates) {
      console.log('unavailableDates=', unavailableDates);
      let days = document.getElementsByClassName('react-calendar__tile');
      let daysArr = Array.from(days);
      daysArr.forEach((item) => {
        if (
          unavailableDates.includes(item.children[0].getAttribute('aria-label'))
        ) {
          item.classList.add('unAnableDate');
        }
      });
    }
  }, [unavailableDates]);

  let url = 'https://modhouse.herokuapp.com/dates';
  const getDates = async (url) => {
    let response = await fetch(url);
    let dates = await response.json();
    let datesList = dates.map((item) => item.date);
    getUnavailableDates(datesList);
  };

  useEffect(() => {
    getDates(url);
  }, [url]);
  const calendar = useRef(null);

  return (
    <div>
      {!unavailableDates ? (
        <CircularProgress />
      ) : (
        <Calendar
          ref={calendar}
          value={value}
          onChange={onChange}
          tileClassName='calendar'
          onClickDay={(value, event) => handleClick(value, event)}
        />
      )}
    </div>
  );
};

export default MyCalendar;
