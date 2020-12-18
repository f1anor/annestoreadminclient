import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Field } from "redux-form";
import Input from "../../Input/Input";
import Select from "../../Select/Select";

const Composition = () => {
  return (
    <Card>
      <Card.Header as="h5">Состав продукта</Card.Header>
      <Card.Body>
        <Row>
          <Col md={9}>
            <Field
              name="composition1title"
              label="Состав"
              component={Input}
              placeholder="Материал"
            />
          </Col>
          <Col md={3}>
            <Field
              name="composition1value"
              label="Количество"
              component={Select}
              options={[
                { title: "Нет", value: null },
                { title: "10%", value: 10 },
                { title: "20%", value: 20 },
                { title: "30%", value: 30 },
                { title: "40%", value: 40 },
                { title: "50%", value: 50 },
                { title: "60%", value: 60 },
                { title: "70%", value: 70 },
                { title: "80%", value: 80 },
                { title: "90%", value: 90 },
                { title: "100%", value: 100 },
              ]}
              placeholder="Короткое и емкое"
            />
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Field
              name="composition2title"
              component={Input}
              placeholder="Материал"
            />
          </Col>
          <Col md={3}>
            <Field
              name="composition2value"
              component={Select}
              options={[
                { title: "Нет", value: null },
                { title: "10%", value: 10 },
                { title: "20%", value: 20 },
                { title: "30%", value: 30 },
                { title: "40%", value: 40 },
                { title: "50%", value: 50 },
                { title: "60%", value: 60 },
                { title: "70%", value: 70 },
                { title: "80%", value: 80 },
                { title: "90%", value: 90 },
                { title: "100%", value: 100 },
              ]}
              placeholder="Короткое и емкое"
            />
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Field
              name="composition3title"
              component={Input}
              placeholder="Материал"
            />
          </Col>
          <Col md={3}>
            <Field
              name="composition3value"
              component={Select}
              options={[
                { title: "Нет", value: null },
                { title: "10%", value: 10 },
                { title: "20%", value: 20 },
                { title: "30%", value: 30 },
                { title: "40%", value: 40 },
                { title: "50%", value: 50 },
                { title: "60%", value: 60 },
                { title: "70%", value: 70 },
                { title: "80%", value: 80 },
                { title: "90%", value: 90 },
                { title: "100%", value: 100 },
              ]}
              placeholder="Короткое и емкое"
            />
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Field
              name="composition4title"
              component={Input}
              placeholder="Материал"
            />
          </Col>
          <Col md={3}>
            <Field
              name="composition4value"
              component={Select}
              options={[
                { title: "Нет", value: null },
                { title: "10%", value: 10 },
                { title: "20%", value: 20 },
                { title: "30%", value: 30 },
                { title: "40%", value: 40 },
                { title: "50%", value: 50 },
                { title: "60%", value: 60 },
                { title: "70%", value: 70 },
                { title: "80%", value: 80 },
                { title: "90%", value: 90 },
                { title: "100%", value: 100 },
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Field
              name="composition5title"
              component={Input}
              placeholder="Материал"
            />
          </Col>
          <Col md={3}>
            <Field
              name="composition5value"
              component={Select}
              options={[
                { title: "Нет", value: null },
                { title: "10%", value: 10 },
                { title: "20%", value: 20 },
                { title: "30%", value: 30 },
                { title: "40%", value: 40 },
                { title: "50%", value: 50 },
                { title: "60%", value: 60 },
                { title: "70%", value: 70 },
                { title: "80%", value: 80 },
                { title: "90%", value: 90 },
                { title: "100%", value: 100 },
              ]}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Composition;
