import "./css/global.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import unavailableDates from "../constant/unavailableDates";

const MyCalendar = () => {
  const today = new Date();
  const [value, onChange] = useState(
    new Date(today.getFullYear(), today.getMonth(), today.getDate())
  );
  // const [selectDate, setSelectDate] = useState(null);
  const handleClick = (value, e) => {
    // setSelectDate(value);
  };
  useEffect(() => {
    let days = document.getElementsByClassName("react-calendar__tile");
    let daysArr = Array.from(days);
    daysArr.forEach((item) => {
      if (
        unavailableDates.includes(item.children[0].getAttribute("aria-label"))
      ) {
        item.classList.add("unAnableDate");
      }
    });
  }, []);

  return (
    <div>
      <Calendar
      value={value}
        onChange={onChange}
        tileClassName="calendar"
        onClickDay={(value, event) => handleClick(value, event)}

        // tileClassName={({ activeStartDate, date, view }) => {
        //   if (unavailableDates.includes(date.toString())) {
        //     return "unAnableDate";
        //   }
        // }}
        // tileDisabled={({activeStartDate, date, view }) => unavailableDates.includes(date.toString())}
      />
    </div>
  );
};

export default MyCalendar;
