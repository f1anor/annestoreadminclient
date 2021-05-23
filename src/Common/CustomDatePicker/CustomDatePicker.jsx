import React from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "./style.css";

registerLocale("ru", ru);

const CustomDatePicker = ({
  date,
  maxDate,
  minDate,
  onHandleChange,
  input,
}) => {
  //

  const MyContainer = ({ className, children }) => {
    return (
      <CalendarContainer className={[className, "custom__calendar"].join(" ")}>
        {children}
      </CalendarContainer>
    );
  };

  return (
    <DatePicker
      locale="ru"
      selected={date}
      onChange={(date) => onHandleChange(date)}
      customInput={input}
      calendarContainer={MyContainer}
      dateFormat="d MMMM"
      maxDate={maxDate ? new Date(+maxDate) : false}
      minDate={minDate ? new Date(+minDate) : false}
    />
  );
};
export default CustomDatePicker;
