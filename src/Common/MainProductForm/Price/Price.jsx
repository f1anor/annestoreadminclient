import React from "react";
import { Card } from "react-bootstrap";
import { Field } from "redux-form";
import { required } from "../../../utils/validators";
import Input from "../../Input/Input";
import Select from "../../Select/Select";

const Price = ({ catForForm }) => {
  return (
    <Card className="h-100">
      <Card.Header as="h5">Стоимость и Категория*</Card.Header>
      <Card.Body>
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
          htmlSize={25}
          multiple
          type="select-multiple"
          options={[{ title: "Нет", value: null }, ...catForForm]}
        />
      </Card.Body>
    </Card>
  );
};

export default Price;
