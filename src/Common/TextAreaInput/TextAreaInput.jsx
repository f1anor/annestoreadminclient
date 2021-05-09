import ErrorProvider from "Common/ErrorProvider/ErrorProvider";
import React from "react";
import css from "./TextAreaInput.module.css";

const TextAreaInput = ({
  label,
  input,
  change,
  className = "",
  readOnly = false,
  placeholder = "",
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
        <textarea
          className={[css.area, isError ? css.error : ""].join(" ")}
          placeholder={placeholder}
          {...input}
          {...props}
        />
      </ErrorProvider>
    </div>
  );
};

export default TextAreaInput;
