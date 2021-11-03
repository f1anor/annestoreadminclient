import React from "react";
import CheckboxInput from "../../../CheckboxInput/CheckboxInput";
import css from "./CategoryInput.module.css";

const CategoryInput = ({ cat, handleSelect, value }) => {
  return (
    <div className={css.wrapper}>
      {cat.map((item) => (
        <label key={item.title} className={css.label}>
          <CheckboxInput
            value={!!value.find((val) => val === item.title)}
            onChange={() => handleSelect(item.title)}
          />
          <span>{item.title}</span>
        </label>
      ))}
    </div>
  );
};

export default CategoryInput;
