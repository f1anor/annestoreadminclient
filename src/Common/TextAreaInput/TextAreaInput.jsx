import ErrorProvider from "Common/ErrorProvider/ErrorProvider";
import InputAnimProvider from "Common/InputAnimProvider/InputAnimProvider";
import React from "react";
import css from "./TextAreaInput.module.css";

const TextAreaInput = ({
  label,
  input,
  change,
  className = "",
  readOnly = false,
  placeholder = "",
  anim = false,
  meta: { touched, error } = false,
  ...props
}) => {
  const isError = touched && error;

  return (
    <div className={[css.wrapper, className].join(" ")}>
      <ErrorProvider
        className={css.errorProvider}
        isError={isError}
        error={error}
      >
        <InputAnimProvider anim={anim} className={css.anim}>
          <textarea
            className={[css.area, isError ? css.error : ""].join(" ")}
            placeholder={placeholder}
            {...input}
            {...props}
          />
        </InputAnimProvider>
      </ErrorProvider>
    </div>
  );
};

export default TextAreaInput;
