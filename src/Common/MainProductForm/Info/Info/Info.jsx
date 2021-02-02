import React from "react";
import FormBlockTitle from "../../../FormBlockTitle/FormBlockTitle";
import { Field } from "redux-form";
import css from "./Info.module.css";
import Input from "Common/Input/Input";
import FormEditorContainer from "../../../FormEditor/FormEditorContainer";
import TooltipBtn from "../../../TooltipBtn/TooltipBtn";

const Info = ({ preloadImage }) => {
  return (
    <div>
      <FormBlockTitle>Информация</FormBlockTitle>
      <div className={css.formLine}>
        <label className={css.label}>
          Название продукта
          <Field name="title" component={Input} className={css.name} />
          <TooltipBtn value="Обязательно" />
        </label>
      </div>
      <div className={css.formLine}>
        <label className={css.label}>Описание</label>
        <Field name="content" component={FormEditorContainer} />
      </div>
      <div className={css.br} />
    </div>
  );
};

export default Info;
