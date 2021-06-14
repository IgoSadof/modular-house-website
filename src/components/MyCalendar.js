import "./global.css";
import React, { useState } from 'react';
import Calendar from 'react-calendar';

 const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  const handleClick = (value,e) =>{
    console.log(value)

  }

  return (
    <div 
    // onClick={handleClick}
    >
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName='calendar'
        onClickDay={(value,e) =>handleClick(value,e)}
        // onClick={() => console.log('New date is: ')}
      />
    </div>
  );
}

export default MyCalendar