import React from "react";
import Radio from "../Radio/Radio";
import css from "./RadioGroup.module.css";

const RadioGroup = ({ input, position, label, width, meta, options }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={[css.wrapper, !!label ? css.withLabel : css.withoutLabel].join(
        " "
      )}
      style={{ width: width }}
    >
      <div className={css.label}>{label}</div>
      <div className={css.inputs}>
        {options.map((o) => (
          <Radio
            input={input}
            label={o.title}
            value={o.value}
            checked={o.value === input.value}
            key={o.value}
          />
        ))}
      </div>
      {hasError && (
        <div
          className={[
            css.error,
            position === "left" ? css.left : " ",
            position === "right" ? css.right : " ",
            position === "top" ? css.top : " ",
            position === "bottom" ? css.bottom : " ",
          ].join(" ")}
        >
          {"Required"}
        </div>
      )}
    </div>
  );
};

export default RadioGroup;
