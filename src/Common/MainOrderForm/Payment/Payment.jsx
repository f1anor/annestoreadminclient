import React from "react";
import { Card, Form, Col, Row } from "react-bootstrap";
import { Field } from "redux-form";
import Input from "Common/Input/Input";
const Payment = ({ price }) => {
  return (
    <Card className="h-100">
      <Card.Header as="h5">Оплата и доставка</Card.Header>
      <Card.Body>
        <Form.Group
          as={Row}
          controlId="formPlaintextPassword"
          className="mt-3 mb-0"
        >
          <Form.Label column sm="4">
            Сумма к оплате:
          </Form.Label>
          <Col sm="8">
            <Form.Control
              plaintext
              readOnly
              className="font-weight-bold"
              value={`${price}₽`}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formPlaintextPassword"
          className="mb-0 mt-3"
        >
          <Form.Label column sm="4">
            Адрес самовывоза:
          </Form.Label>
          <Col sm="8">
            <Field name="address" component={Input} placeholder="Адресс" />
          </Col>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default Payment;
