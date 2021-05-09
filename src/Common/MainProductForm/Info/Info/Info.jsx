import React from "react";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import { Field } from "redux-form";
import css from "./Info.module.css";
import Input from "Common/Input/Input";
import FormEditorContainer from "Common/FormEditor/FormEditorContainer";
import TooltipBtn from "Common/TooltipBtn/TooltipBtn";
import { required, requiredEdit } from "utils/validators";
const Info = () => {
  return (
    <div>
      <FormBlockTitle>Информация</FormBlockTitle>
      <div className={css.formLine}>
        <label className={css.label}>
          Название продукта
          <Field
            name="title"
            component={Input}
            className={css.name}
            validate={[required]}
          />
          <TooltipBtn value="Обязательно" />
        </label>
      </div>
      <div className={css.formLine}>
        <label className={css.label}>Описание</label>
        <Field
          name="content"
          component={FormEditorContainer}
          validate={[requiredEdit]}
        />
      </div>
      <div className={css.br} />
    </div>
  );
};

export default Info;
