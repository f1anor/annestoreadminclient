import React from "react";
import { Card } from "react-bootstrap";
import Title from "../../Common/Title/Title";
import RegisterFormContainer from "./RegisterForm/RegisterFormContainer";
import css from "./RegisterPage.module.css";

const RegisterPage = (props) => {
  return (
    <div className={css.wrapper}>
      <Card>
        <Card.Header>
          <Title>Регистрация нового администратора</Title>
        </Card.Header>
        <Card.Body>
          <RegisterFormContainer {...props} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterPage;
