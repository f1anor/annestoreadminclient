import React from "react";
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";
import css from "./SizeInput.module.css";

const SizeInput = ({ handleSelect, value }) => {
  return (
    <div className={css.wrapper}>
      <CustomCheckbox
        value={!!value.find((item) => item === "S")}
        onChange={() => handleSelect("S")}
        content="S"
        className={css.s}
      />
      <CustomCheckbox
        value={!!value.find((item) => item === "M")}
        onChange={() => handleSelect("M")}
        content="M"
        className={css.m}
      />
      <CustomCheckbox
        value={!!value.find((item) => item === "L")}
        onChange={() => handleSelect("L")}
        content="L"
        className={css.l}
      />
      <CustomCheckbox
        value={!!value.find((item) => item === "XL")}
        onChange={() => handleSelect("XL")}
        content="XL"
        className={css.xl}
      />
      <CustomCheckbox
        value={!!value.find((item) => item === "XXL")}
        onChange={() => handleSelect("XXL")}
        content="XXL"
        className={css.xxl}
      />
    </div>
  );
};

export default SizeInput;
