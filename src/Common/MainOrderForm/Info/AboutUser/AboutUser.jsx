import React from "react";
import { Field } from "redux-form";
import Input from "Common/Input/Input";
import css from "./AboutUser.module.css";
import { isNumber, required } from "utils/validators";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import OpenAnim from "Common/OpenAnim/OpenAnim";
import FormBlockLine from "Common/FormBlockLine/FormBlockLine";
import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";
import TooltipBtn from "Common/TooltipBtn/TooltipBtn";
import InputPhone from "Common/InputPhone/InputPhone";

const AboutUser = ({ editMode, handleSetShowAdw, showAdw, formName }) => {
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
            <TooltipBtn value="Имя и фамилия через пробел" />
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
            {/* <PhoneContainer editMode={editMode} formName={formName} /> */}
            <Field
              component={InputPhone}
              name="phone"
              validate={[required, isNumber]}
              readOnly={!editMode}
            />
          </FormBlockLabel>
        </FormBlockLine>
      </OpenAnim>
    </div>
  );
};

export default AboutUser;
