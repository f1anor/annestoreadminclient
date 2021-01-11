import React from "react";
import FormBlock from "../../FormBlock/FormBlock";
import FormBlockTitle from "../../FormBlockTitle/FormBlockTitle";
import { Field } from "redux-form";
import css from "./Info.module.css";
import Input from "Common/Input/Input";
import FormEditorContainer from "../../FormEditor/FormEditorContainer";
import ImgsContainer from "./Imgs/ImgsContainer";
import CustomInfoContainer from "./CustomInfo/CustomInfoContainer";

const Info = ({ preloadImage }) => {
  return (
    <FormBlock>
      <FormBlockTitle>Информация</FormBlockTitle>
      <div className={css.formLine}>
        <label className={css.label}>
          Название продукта
          <Field name="title" component={Input} className={css.input} />
        </label>
      </div>
      <div className={css.formLine}>
        <label className={css.label}>Описание</label>
        <Field name="content" component={FormEditorContainer} />
      </div>
      <div className={css.br} />
      <FormBlockTitle>Изображения</FormBlockTitle>
      <ImgsContainer preloadImage={preloadImage} />
      <CustomInfoContainer />
    </FormBlock>
  );
};

export default Info;
