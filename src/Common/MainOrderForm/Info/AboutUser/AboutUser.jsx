import React from "react";
import { Field } from "redux-form";
import Input from "Common/Input/Input";
import css from "./AboutUser.module.css";
import { required } from "utils/validators";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import OpenAnim from "Common/OpenAnim/OpenAnim";
import FormBlockLine from "Common/FormBlockLine/FormBlockLine";
import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";

const AboutUser = ({ editMode, handleSetShowAdw, showAdw }) => {
  return (
    <div>
      <FormBlockTitle>
        Данные о покупателе
        <button
          type="button"
          className={css.showBtn}
          onClick={handleSetShowAdw}
        >
          {!!showAdw ? "Скрыть" : "Показать"}
        </button>
      </FormBlockTitle>
      <OpenAnim isOpen={!!showAdw}>
        <FormBlockLine>
          <FormBlockLabel>
            Имя*
            <Field
              name="name"
              component={Input}
              validate={[required]}
              readOnly={!editMode}
              className={css.name}
            />
          </FormBlockLabel>
        </FormBlockLine>
        <FormBlockLine double="true">
          <FormBlockLabel>
            Email*
            <Field
              name="email"
              component={Input}
              validate={[required]}
              readOnly={!editMode}
            />
          </FormBlockLabel>
          <FormBlockLabel>
            Телефон*
            <Field
              name="phone"
              component={Input}
              validate={[required]}
              readOnly={!editMode}
            />
          </FormBlockLabel>
        </FormBlockLine>
      </OpenAnim>
    </div>
  );
};

export default AboutUser;
