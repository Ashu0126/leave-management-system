"use client";
import { useState } from "react";
import style from "./index.module.scss";

const Calender = (props: any) => {
  const { nextBtn, prevBtn } = props;

  const [date, setDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);

    const blanks = Array(firstDay).fill(null);
    const daysArray = Array.from({ length: days }, (_, i) => i + 1);

    const calendarDays = [...blanks, ...daysArray];

    return (
      <div className={style.calendar}>
        <div className={style.header}>
          {prevBtn && <button onClick={handlePrevMonth}>&lt;</button>}
          <h2>
            {new Date(year, month).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          {nextBtn && <button onClick={handleNextMonth}>&gt;</button>}
        </div>
        <div className={style.days}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className='day-label'>
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => (
            <div key={index} className={day ? "day" : "empty-day"}>
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div>{renderCalendar()}</div>;
};

export default Calender;
