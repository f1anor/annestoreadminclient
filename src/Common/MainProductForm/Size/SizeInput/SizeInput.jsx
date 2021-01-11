import React from "react";
import CheckboxInput from "../../../CheckboxInput/CheckboxInput";
import css from "./SizeInput.module.css";

const SizeInput = ({ handleSelect, value }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        <CheckboxInput
          value={value.find((item) => item === "XS")}
          onChange={() => handleSelect("XS")}
        />{" "}
        <span>XS</span>
      </label>
      <label className={css.label}>
        <CheckboxInput
          value={value.find((item) => item === "S")}
          onChange={() => handleSelect("S")}
        />{" "}
        <span>S</span>
      </label>
      <label className={css.label}>
        <CheckboxInput
          value={value.find((item) => item === "M")}
          onChange={() => handleSelect("M")}
        />{" "}
        <span>M</span>
      </label>
      <label className={css.label}>
        <CheckboxInput
          value={value.find((item) => item === "L")}
          onChange={() => handleSelect("L")}
        />{" "}
        <span>L</span>
      </label>
      <label className={css.label}>
        <CheckboxInput
          value={value.find((item) => item === "XL")}
          onChange={() => handleSelect("XL")}
        />{" "}
        <span>XL</span>
      </label>
      <label className={css.label}>
        <CheckboxInput
          value={value.find((item) => item === "2XL")}
          onChange={() => handleSelect("2XL")}
        />{" "}
        <span>2XL</span>
      </label>
      <label className={css.label}>
        <CheckboxInput
          value={value.find((item) => item === "3XL")}
          onChange={() => handleSelect("3XL")}
        />{" "}
        <span>3XL</span>
      </label>
    </div>
  );
};

export default SizeInput;
