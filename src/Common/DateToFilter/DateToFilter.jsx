import React, { forwardRef } from "react";
import css from "./DateToFilter.module.css";
import { ReactComponent as CalendarIcon } from "assets/svg/calendar3.svg";
import CustomDatePicker from "Common/CustomDatePicker/CustomDatePicker";

const DateToFilter = ({ handleTimeChange, startDate, minDate }) => {
  const CustomButton = forwardRef(({ value, onClick }, ref) => {
    let date = null;
    if (!!value) {
      const arr = value.split(" ");
      arr[1] = arr[1].slice(0, 3);
      date = arr.join(" ");
    }

    return (
      <button className={css.dateWrapper} onClick={onClick} ref={ref}>
        <CalendarIcon />
        Дата до: <span>{date || "Нет"}</span>
      </button>
    );
  });

  return (
    <div className={css.wrapper}>
      <CustomDatePicker
        date={startDate}
        onHandleChange={handleTimeChange}
        minDate={minDate}
        input={<CustomButton />}
      />
    </div>
  );
};
export default DateToFilter;
