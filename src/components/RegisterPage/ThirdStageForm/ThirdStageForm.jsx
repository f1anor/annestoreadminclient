import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";
import FormBlockLine from "Common/FormBlockLine/FormBlockLine";
import Input from "Common/Input/Input";
import ModalButton from "Common/ModalButton/ModalButton";
import React from "react";
import { Field, reduxForm } from "redux-form";
import css from "./ThirdStageForm.module.css";
import { ReactComponent as MailIcon } from "assets/svg/envelope.svg";
import { ReactComponent as PeopleIcon } from "assets/svg/person-lines-fill.svg";
import { ReactComponent as PhoneIcon } from "assets/svg/phone.svg";
import { email, required } from "utils/validators";
import InputPhone from "Common/InputPhone/InputPhone";

const ThirdStageForm = ({ error, handleSubmit, handleReturn, disabled }) => {
  return (
    <form onSubmit={handleSubmit} className={css.wrapper}>
      <div className={css.inner}>
        <FormBlockLine double="true" className={css.line}>
          <FormBlockLabel>
            <Field
              component={Input}
              name="firstName"
              autoFocus
              placeholder="Имя"
              validate={[required]}
              autoComplete="off"
              Icon={() => <PeopleIcon className={css.icon} />}
              disabled={disabled}
            />
          </FormBlockLabel>
          <FormBlockLabel>
            <Field
              component={Input}
              name="lastName"
              placeholder="Фамилия"
              validate={[required]}
              autoComplete="off"
              Icon={() => <PeopleIcon className={css.icon} />}
              disabled={disabled}
            />
          </FormBlockLabel>
        </FormBlockLine>

        <FormBlockLine className={css.line}>
          <FormBlockLabel>
            <Field
              component={InputPhone}
              name="phone"
              placeholder="Телефон"
              validate={[required]}
              autoComplete="off"
              Icon={() => <PhoneIcon className={css.icon} />}
              disabled={disabled}
            />
          </FormBlockLabel>
        </FormBlockLine>

        <FormBlockLine className={css.line}>
          <FormBlockLabel>
            <Field
              component={Input}
              name="email"
              validate={[required, email]}
              placeholder="Email"
              autoComplete="off"
              Icon={() => <MailIcon className={css.icon} />}
              disabled={disabled}
            />
          </FormBlockLabel>
        </FormBlockLine>
        <div className={css.error}>{error}</div>
      </div>
      <div className={css.btns}>
        <ModalButton disabled={disabled} anim={disabled}>
          Далее
        </ModalButton>
        <ModalButton
          disabled={disabled}
          secondary={true}
          type="button"
          onClick={handleReturn}
        >
          Назад
        </ModalButton>
      </div>
    </form>
  );
};
export default reduxForm({ form: "regThirdStageForm" })(ThirdStageForm);
