import React from "react";
import { Form } from "react-bootstrap";

// FIXME: Кажется можно удалять. Проверить
const Select = ({
  label,
  options = [],
  input,
  meta: { touched, error, submitFailed },
  ...props
}) => {
  const isError = touched && error;
  return (
    <Form.Group>
      {!!label && <Form.Label>{label}</Form.Label>}
      <Form.Control isInvalid={!!isError} {...input} {...props} as="select">
        {options.map((op) => (
          <option key={op.title} value={op.value}>
            {op.title}
          </option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default Select;
