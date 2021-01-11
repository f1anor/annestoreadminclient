import React from "react";
import { Field } from "redux-form";
import FormBlock from "../../FormBlock/FormBlock";
import FormBlockTitle from "../../FormBlockTitle/FormBlockTitle";
import css from "./Size.module.css";
import SizeInputContainer from "./SizeInput/SizeInputContainer";

const Size = () => {
  return (
    <FormBlock className={css.wrapper}>
      <FormBlockTitle>Размер</FormBlockTitle>
      <Field component={SizeInputContainer} name="size" />
    </FormBlock>
  );
};

export default Size;
