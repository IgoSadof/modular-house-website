import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import CircularProgress from '@material-ui/core/CircularProgress';

const MyCalendar = ({ setSelectDate, unavailableDates, getUnavailableDates }) => {
  const today = new Date();
  const [value, onChange] = useState(
    new Date(today.getFullYear(), today.getMonth(), today.getDate())
  );


  const handleClick = (value, e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      setSelectDate({ "date": e.target.children[0].getAttribute("aria-label") })
    } else {
      setSelectDate({ "date": e.target.getAttribute("aria-label") })
    }
  };
  useEffect(() => {
    if (unavailableDates) {
      console.log('unavailableDates=', unavailableDates)
      let days = document.getElementsByClassName("react-calendar__tile");
      let daysArr = Array.from(days);
      daysArr.forEach((item) => {
        if (
          unavailableDates.includes(item.children[0].getAttribute("aria-label"))
        ) {
          item.classList.add("unAnableDate");
        }
      });

    }

  }, [unavailableDates]);

  let url = 'https://modhouse.herokuapp.com/dates';
  const getDates = async (url) => {
    let response = await fetch(url);
    let dates = await response.json();
    let datesList = dates.map(item => item.date)
    getUnavailableDates(datesList)
  }

  useEffect(() => {
    getDates(url)
  }, [url]);

  return (
    <div>
      {!unavailableDates ? (<CircularProgress />) : (<Calendar
        value={value}
        onChange={onChange}
        tileClassName="calendar"
        onClickDay={(value, event) => handleClick(value, event)}
      />)}

    </div>
  );
};

export default MyCalendar;
