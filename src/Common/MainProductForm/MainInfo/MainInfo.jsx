import React from "react";
import { Card } from "react-bootstrap";
import { Field } from "redux-form";
import { required } from "../../../utils/validators";
import Input from "../../Input/Input";

const MainInfo = () => {
  return (
    <Card>
      <Card.Header as="h5">Основная Информация*</Card.Header>
      <Card.Body>
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
      </Card.Body>
    </Card>
  );
};

export default MainInfo;
