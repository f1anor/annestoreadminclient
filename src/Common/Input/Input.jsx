import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  label,
  input,
  change,
  readOnly = false,
  meta: { touched, error, submitFailed },
  ...props
}) => {
  const isError = touched && error;
  return (
    <Form.Group>
      {!!label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        isInvalid={!!isError}
        plaintext={readOnly}
        readOnly={readOnly}
        {...input}
        {...props}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;
