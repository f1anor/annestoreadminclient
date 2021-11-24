import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import Input from "Common/Input/Input";
import { required } from "utils/validators";
import css from "./LoginForm.module.css";
import { ReactComponent as UserIcon } from "assets/svg/user.svg";
import { ReactComponent as LockIcon } from "assets/svg/lock.svg";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import Button from "Common/Button/Button";

const LoginForm = ({ error, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={css.wrapper}>
      <div className={css.inputWrapper}>
        <UserIcon className={css.userIcon} />
        <Field
          name="login"
          component={Input}
          placeholder="Логин"
          validate={[required]}
          className={css.input}
        />
      </div>
      <div className={css.inputWrapper}>
        <LockIcon className={css.lockIcon} />
        <Field
          name="pass"
          className={css.input}
          component={Input}
          placeholder="Пароль"
          validate={[required]}
        />
      </div>
      <div className={css.regLine}>
        <label className={css.checkLabel}>
          <Field
            name="remember"
            label=" "
            component={CheckboxInput}
            type="checkbox"
            className={css.checkbox}
          />
          <span>Запомнить</span>
        </label>
        <Link className={css.regLink} to="/register">
          Регистрация
        </Link>
      </div>
      {!!error && <Alert variant="danger">{error}</Alert>}
      <Button className={css.loginBtn} type="submit">
        Войти
      </Button>
    </form>
  );
};

export default reduxForm({ form: "logForm" })(LoginForm);
