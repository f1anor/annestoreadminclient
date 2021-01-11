import React from "react";
import { Form } from "react-bootstrap";
import css from "./Input.module.css";

const Input = ({
  label,
  input,
  change,
  className = "",
  readOnly = false,
  placeholder = "",
  meta: { touched, error, submitFailed },
  ...props
}) => {
  const isError = touched && error;
  return (
    <Form.Group className={css.wrapper}>
      {!!label && <Form.Label>{label}</Form.Label>}

      <input
        className={[css.input, className].join(" ")}
        // isInvalid={!!isError}
        // plaintext={readOnly}
        // readOnly={readOnly}
        placeholder={placeholder}
        {...input}
        {...props}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;
