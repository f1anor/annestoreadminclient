import CustomDatePicker from "Common/CustomDatePicker/CustomDatePicker";
import React from "react";
import Btn from "./Btn/Btn";
import css from "./Callendar.module.css";

const Callendar = ({ handleTimeChange, startDate, maxDate }) => {
  return (
    <div className={css.wrapper}>
      <CustomDatePicker
        date={startDate}
        onHandleChange={handleTimeChange}
        maxDate={maxDate}
        input={<Btn startDate={startDate} />}
      />
    </div>
  );
};
export default Callendar;
