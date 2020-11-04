import React from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

import css from "./Controlls.module.css";
import RangeConitainer from "./Range/RangeContainer";

const Controlls = ({ startDate, handleTimeChange }) => {
  return (
    <div className="d-flex mt-5">
      <Link to="/dashboard/?page=1">
        <Button>Сбросить</Button>
      </Link>
      <RangeConitainer />
      <div className={css.pickerWrapper}>
        <DatePicker
          selected={startDate}
          onChange={(date) => handleTimeChange(date)}
          className={css.picker}
        />
      </div>
    </div>
  );
};

export default Controlls;
