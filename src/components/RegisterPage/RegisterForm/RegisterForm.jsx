import React from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import Input from "../../../Common/Input/Input";
import ImageLoaderContainer from "../../../Common/ImageLoader/ImageLoaderContainer";
import { required } from "../../../utils/validators";

const RegisterForm = ({ error, handleSubmit, preloadAvatar }) => {
  return (
    <form onSubmit={handleSubmit} className="pt-3">
      {!!error && <Alert variant="danger">{error}</Alert>}
      <Row className="p-3">
        <Col>
          <Field
            label="Логин:"
            name="login"
            component={Input}
            placeholder="Логин"
            validate={[required]}
          />

          <Row>
            <Col>
              <Field
                label="Имя:"
                name="firstName"
                component={Input}
                placeholder="Имя"
                validate={[required]}
              />
            </Col>
            <Col>
              <Field
                label="Фамилия:"
                name="lastName"
                component={Input}
                placeholder="Фамилия"
                validate={[required]}
              />
            </Col>
          </Row>
          <Field
            label="Email:"
            name="email"
            component={Input}
            placeholder="Email"
            validate={[required]}
          />
          <Field
            label="Телефон:"
            name="phone"
            component={Input}
            placeholder="Телефон"
            validate={[required]}
          />
          <Row>
            <Col>
              <Field
                label="Пароль:"
                name="pass"
                component={Input}
                placeholder="Пароль"
                validate={[required]}
              />
            </Col>
            <Col>
              <Field
                label="Повторить:"
                name="repass"
                component={Input}
                placeholder="Пароль"
                validate={[required]}
              />
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <label>Аватар:</label>
            <Field
              name="avaImg"
              component={ImageLoaderContainer}
              preloadImage={preloadAvatar}
              width={382}
              height={382}
            />
          </div>
        </Col>
      </Row>

      <div className="d-flex justify-content-end mt-3">
        <Link to="/">
          <Button className="mr-2" variant="outline-primary">
            Отменить
          </Button>
        </Link>

        <Button type="submit">Подтвердить</Button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "regForm" })(RegisterForm);
