import React from "react";
import { Field } from "redux-form";
import ArrowBtn from "../../ArrowBtn/ArrowBtn";
import FormBlock from "../../FormBlock/FormBlock";
import FormBlockTitle from "../../FormBlockTitle/FormBlockTitle";
import OpenAnim from "../../OpenAnim/OpenAnim";
import css from "./Size.module.css";
import SizeInputContainer from "./SizeInput/SizeInputContainer";

const Size = ({ sizeValue = [], isOpen, handleSetOpen }) => {
  return (
    <FormBlock className={css.wrapper}>
      <FormBlockTitle counter={`${sizeValue.length}/5`}>
        Размер <ArrowBtn down={!!isOpen} onClick={handleSetOpen} />
      </FormBlockTitle>
      <OpenAnim isOpen={isOpen}>
        <Field component={SizeInputContainer} name="size" />
      </OpenAnim>
    </FormBlock>
  );
};

export default Size;
