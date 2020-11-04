import React from "react";
import { Card, Form, Col, Row } from "react-bootstrap";
import { Field } from "redux-form";
import Input from "Common/Input/Input";

import { required } from "utils/validators";

const AboutUser = () => {
  return (
    <Card>
      <Card.Header as="h5">Данные покупателя</Card.Header>
      <Card.Body>
        <Form.Group
          as={Row}
          controlId="formPlaintextPassword"
          className="mt-3 mb-0"
        >
          <Form.Label column sm="4">
            Email:
          </Form.Label>
          <Col sm="8">
            <Field
              name="email"
              component={Input}
              placeholder="Email"
              validate={[required]}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword" className="mb-0">
          <Form.Label column sm="4">
            Телефон:
          </Form.Label>
          <Col sm="8">
            <Field
              name="phone"
              component={Input}
              placeholder="Телефон"
              validate={[required]}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword" className="mb-0">
          <Form.Label column sm="4">
            Имя:
          </Form.Label>
          <Col sm="8">
            <Field
              name="firstName"
              component={Input}
              placeholder="Имя"
              validate={[required]}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword" className="mb-0">
          <Form.Label column sm="4">
            Фамилия:
          </Form.Label>
          <Col sm="8">
            <Field
              name="lastName"
              component={Input}
              placeholder="Фамилия"
              validate={[required]}
            />
          </Col>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default AboutUser;
