import React, { forwardRef } from "react";
import css from "./Btn.module.css";
import { ReactComponent as CalendarIcon } from "assets/svg/calendar3.svg";

const Btn = ({ value, onClick, startDate }, ref) => {
  const currentDate = new Date();
  currentDate.setHours(0);
  currentDate.setMinutes(0);
  currentDate.setSeconds(0);
  currentDate.setMilliseconds(0);

  const noDate = currentDate.getTime() === startDate.getTime();
  let date = null;
  if (!!value) {
    const arr = value.split(" ");
    arr[1] = arr[1].slice(0, 3);
    date = arr.join(" ");
  }

  return (
    <button
      className={[css.dateWrapper, !!noDate ? css.nodate : ""].join(" ")}
      onClick={onClick}
      ref={ref}
      disabled={false}
    >
      <CalendarIcon />
      {!noDate && date}
    </button>
  );
};

export default forwardRef(Btn);
