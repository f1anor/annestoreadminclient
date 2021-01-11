import React from "react";
import { Field } from "redux-form";
import { required } from "../../../utils/validators";
import FormBlock from "../../FormBlock/FormBlock";
import FormBlockTitle from "../../FormBlockTitle/FormBlockTitle";
import Input from "Common/Input/Input";
import css from "./Publication.module.css";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";

const Price = ({ catForForm }) => {
  return (
    <FormBlock>
      <FormBlockTitle>Публикация</FormBlockTitle>
      <label className={css.label}>
        Цена
        <div className={css.inputWrapper}>
          <span>₽</span>
          <Field
            name="price"
            placeholder="За одну штуку"
            component={Input}
            // validate={[required]}
            className={css.input}
          />
        </div>
      </label>
      <label className={css.label}>
        Количество
        <div className={css.inputWrapper}>
          <span>шт.</span>
          <Field
            name="amount"
            component={Input}
            // validate={[required]}
            className={css.input}
          />
        </div>
      </label>
      <div className={css.isActive}>
        <CheckboxInput />
        <span>Активировать</span>
      </div>
    </FormBlock>
  );
};

export default Price;
