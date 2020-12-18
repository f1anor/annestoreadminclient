import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import Input from "../../../Common/Input/Input";
import { required } from "../../../utils/validators";
import css from "./LoginForm.module.css";
import { ReactComponent as UserIcon } from "assets/svg/user.svg";
import { ReactComponent as LockIcon } from "assets/svg/lock.svg";
import CheckboxInput from "../../../Common/CheckboxInput/CheckboxInput";

const LoginForm = ({ error, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={css.formInner}>
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
        <div
          className="d-flex justify-content-between
				"
        >
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
      </div>
      {!!error && <Alert variant="danger">{error}</Alert>}
      <button type="submit" className={css.loginBtn}>
        Войти
      </button>
    </form>
  );
};

export default reduxForm({ form: "logForm" })(LoginForm);
