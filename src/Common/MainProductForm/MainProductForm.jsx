import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Field } from "redux-form";
import RadioGroup from "../RadioGroup/RadioGroup";
import Input from "../Input/Input";
import Select from "../Select/Select";
import ColorPickerContainer from "../ColorPicker/ColorPickerContainer";
import { required } from "../../utils/validators";
import Imgs from "./Imgs/Imgs";

const MainProductForm = ({ catForForm }) => {
  return (
    <>
      <Form.Group className="mt-3" controlId="title">
        <Row>
          <Col md={9}>
            <Field
              name="title"
              label="Название"
              component={Input}
              placeholder="Короткое и емкое"
              validate={[required]}
            />
            <Field
              name="content"
              label="Описание"
              component={Input}
              as="textarea"
              rows="3"
              placeholder="Развернутое описание продукта"
              validate={[required]}
            />
            <Row className="d-flex justify-content-between">
              <Col md={6}>
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
              </Col>
              <Col md={1}>
                <Field
                  label="Цвет"
                  name="color"
                  component={ColorPickerContainer}
                />
              </Col>
              <Col
                className="d-flex flex-column justify-content-between"
                md={4}
              >
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
          </Col>
          <Col md={3}>
            <Field
              name="price"
              label="Цена"
              component={Input}
              placeholder="Рубли"
              validate={[required]}
            />
            <Field
              name="category"
              label="Категория"
              component={Select}
              htmlSize={16}
              multiple
              type="select-multiple"
              options={[{ title: "Нет", value: null }, ...catForForm]}
            />
          </Col>
        </Row>
        <Imgs />
        <Form.Control.Feedback type="invalid">
          {/* {errors.city} */}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default MainProductForm;
