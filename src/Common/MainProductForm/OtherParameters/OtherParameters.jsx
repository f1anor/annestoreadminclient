import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Field } from "redux-form";
import ColorPickerContainer from "../../ColorPicker/ColorPickerContainer";
import RadioGroup from "../../RadioGroup/RadioGroup";
import Select from "../../Select/Select";

const OtherParameters = () => {
  return (
    <Card>
      <Card.Header as="h5">Дополнительные параметры</Card.Header>
      <Card.Body>
        <Row>
          <Col md={3}>
            <div className="pl-3">
              <Field
                label="Цвет"
                name="color"
                component={ColorPickerContainer}
              />
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-between" md={8}>
            <Field
              name="size"
              label="Размер"
              component={Select}
              htmlSize={9}
              type="select-multiple"
              options={[
                { title: "Нет", value: null },
                { title: "S", value: "s" },
                { title: "M", value: "m" },
                { title: "L", value: "l" },
                { title: "XL", value: "xl" },
                { title: "XXL", value: "xxl" },
                { title: "XXXL", value: "xxxl" },
              ]}
              multiple
              placeholder="Короткое и емкое"
            />
            <Field
              component={RadioGroup}
              name="gender"
              label="Пол"
              position="right"
              width="70%"
              options={[
                { title: "Нет", value: "" },
                { title: "Male", value: "male" },
                { title: "Female", value: "female" },
              ]}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OtherParameters;
