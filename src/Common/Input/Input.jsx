import React from "react";
import { Form } from "react-bootstrap";
import css from "./Input.module.css";
import { ReactComponent as LockIcon } from "assets/svg/lock2.svg";
import ErrorProvider from "Common/ErrorProvider/ErrorProvider";

const Input = React.memo(
  ({
    label,
    input,
    change,
    className = "",
    readOnly = false,
    placeholder = "",
    disabled,
    meta: { touched, error, submitFailed } = false,
    ...props
  }) => {
    const isError = touched && error;

    return (
      <div className={css.wrapper}>
        {!!label && <label>{label}</label>}
        <ErrorProvider error={error} isError={isError}>
          <input
            disabled={disabled}
            className={[css.input, isError ? css.error : "", className].join(
              " "
            )}
            placeholder={placeholder}
            {...input}
            {...props}
          />
          {!!disabled && <LockIcon className={css.lock} />}
        </ErrorProvider>

        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </div>
    );
  }
);

export default Input;
