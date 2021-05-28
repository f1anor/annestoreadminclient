import React, { forwardRef } from "react";
import css from "./DateFormFilter.module.css";
import { ReactComponent as CalendarIcon } from "assets/svg/calendar3.svg";
import CustomDatePicker from "Common/CustomDatePicker/CustomDatePicker";

const DateFormFilter = ({ handleTimeChange, startDate, maxDate, disabled }) => {
  const CustomButton = forwardRef(({ value, onClick }, ref) => {
    let date = null;
    if (!!value) {
      const arr = value.split(" ");
      arr[1] = arr[1].slice(0, 3);
      date = arr.join(" ");
    }

    return (
      <button
        className={css.dateWrapper}
        onClick={onClick}
        ref={ref}
        disabled={disabled}
      >
        <CalendarIcon />
        Дата от: <span>{date || "Нет"}</span>
      </button>
    );
  });
  return (
    <div className={css.wrapper}>
      <CustomDatePicker
        date={startDate}
        onHandleChange={handleTimeChange}
        maxDate={maxDate}
        input={<CustomButton />}
      />
    </div>
  );
};
export default DateFormFilter;
