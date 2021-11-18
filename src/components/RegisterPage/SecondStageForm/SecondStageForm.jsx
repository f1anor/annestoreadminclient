import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";
import FormBlockLine from "Common/FormBlockLine/FormBlockLine";
import Input from "Common/Input/Input";
import ModalButton from "Common/ModalButton/ModalButton";
import React from "react";
import { Field, reduxForm } from "redux-form";
import css from "./SecondStageForm.module.css";
import { ReactComponent as UserIcon } from "assets/svg/user.svg";
import { ReactComponent as LockIcon } from "assets/svg/lock.svg";
import { comparePasswords, min8dig, required, login } from "utils/validators";

const SecondStageForm = ({ error, handleSubmit, handleReturn, disabled }) => {
  return (
    <form onSubmit={handleSubmit} className={css.wrapper}>
      <div className={css.inner}>
        <FormBlockLine className={css.line}>
          <FormBlockLabel>
            <Field
              component={Input}
              autoFocus
              name="login"
              validate={[required, login]}
              autoComplete="off"
              Icon={() => <UserIcon className={css.icon} />}
              placeholder="Логин"
              disabled={disabled}
            />
          </FormBlockLabel>
        </FormBlockLine>

        <FormBlockLine double="true" className={css.line}>
          <FormBlockLabel>
            <Field
              component={Input}
              name="password"
              placeholder="Пароль"
              validate={[required, min8dig]}
              autoComplete="off"
              Icon={() => <LockIcon className={css.icon} />}
              disabled={disabled}
              type="password"
            />
          </FormBlockLabel>
          <FormBlockLabel>
            <Field
              component={Input}
              name="rePassword"
              placeholder="Повтор"
              autoComplete="off"
              Icon={() => <LockIcon className={css.icon} />}
              validate={[required, comparePasswords]}
              type="password"
              disabled={disabled}
            />
          </FormBlockLabel>
        </FormBlockLine>
        <p className={css.text}>
          Пароль не должен быть короче <span>8 символов.</span>
        </p>
        <div className={css.error}>{error}</div>
      </div>
      <div className={css.btns}>
        <ModalButton disabled={disabled} anim={disabled}>
          Далее
        </ModalButton>
        <ModalButton
          secondary={true}
          type="button"
          onClick={handleReturn}
          disabled={disabled}
        >
          Назад
        </ModalButton>
      </div>
    </form>
  );
};
export default reduxForm({ form: "regSecondStageForm" })(SecondStageForm);
