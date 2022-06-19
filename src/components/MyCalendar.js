import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';

const MyCalendar = ({
  unavailableDates,
}) => {
  const [date, setDate] = useState(new Date());

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
  const handleChange = (value) =>{
    setDate(value)
  }

  const calendar = useRef(null);

  return (
    <div>
      <Calendar
        ref={calendar}
        value={date}
        onChange={(value) => handleChange(value)}
        onClickDay={(value) => handleChange(value)}
        selectRange={true}
        tileClassName={({date}) =>
        checkDate(date.toString().slice(4, 15), dates)
            ? 'calendar unAnableDate'
            : 'calendar'
        }
      />
    </div>
  );
};

export default MyCalendar;
