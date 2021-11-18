import React, { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import css from "./Input.module.css";
import { ReactComponent as LockIcon } from "assets/svg/lock2.svg";
import ErrorProvider from "Common/ErrorProvider/ErrorProvider";
import InputAnimProvider from "Common/InputAnimProvider/InputAnimProvider";

const Input = React.memo(
  ({
    label,
    input,
    change,
    className = "",
    readOnly = false,
    placeholder = "",
    Icon,
    disabled,
    anim = false,
    simple = false, // простой вариант оформления для модальных окон
    meta: { active, touched, error, submitFailed } = false,
    ...props
  }) => {
    const ref = useRef();
    const isError = touched && error;

    useEffect(() => {
      if (!ref || ref.current === document.activeElement || !active) return;
      ref.current.focus();
    }, [active]);

    return (
      <div className={[css.wrapper, simple ? css.simple : " "].join(" ")}>
        {!!label && <label>{label}</label>}
        <ErrorProvider error={error} isError={isError}>
          <InputAnimProvider anim={anim}>
            {!!Icon && !isError && !disabled && <Icon />}
            <input
              ref={ref}
              disabled={disabled}
              className={[css.input, isError ? css.error : "", className].join(
                " "
              )}
              placeholder={placeholder}
              {...input}
              {...props}
            />
            {!!disabled && <LockIcon className={css.lock} />}
          </InputAnimProvider>
        </ErrorProvider>

        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </div>
    );
  }
);

export default Input;
