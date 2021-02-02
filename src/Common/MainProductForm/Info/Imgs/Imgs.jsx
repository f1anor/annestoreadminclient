import React from "react";
import css from "./Imgs.module.css";
import { Field } from "redux-form";
import ImgsInputContainer from "./ImgsInput/ImgsInputContainer";
import FormBlockTitle from "../../../FormBlockTitle/FormBlockTitle";

const Imgs = ({ imgsValue = [] }) => {
  return (
    <div className={css.wrapper}>
      <FormBlockTitle counter={`${imgsValue.length}/10 `}>
        Изображения
      </FormBlockTitle>
      <Field name="imgs" component={ImgsInputContainer} />
    </div>
  );
};

export default Imgs;
