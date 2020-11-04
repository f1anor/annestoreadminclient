import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  label,
  input,
  change,
  meta: { touched, error, submitFailed },
  ...props
}) => {
  const isError = touched && error;
  return (
    <Form.Group>
      {!!label && <Form.Label>{label}</Form.Label>}
      <Form.Control isInvalid={!!isError} {...input} {...props} />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;
