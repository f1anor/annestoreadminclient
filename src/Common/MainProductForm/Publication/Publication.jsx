import React from "react";
import { Field } from "redux-form";
import FormBlock from "../../FormBlock/FormBlock";
import FormBlockTitle from "../../FormBlockTitle/FormBlockTitle";
import Input from "Common/Input/Input";
import css from "./Publication.module.css";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import { Link } from "react-router-dom";
import { required, isNumber } from "utils/validators";
import Button from "Common/Button/Button";

const Price = ({ catForForm }) => {
  return (
    <div>
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
              className={css.input}
              validate={[required, isNumber]}
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
              className={css.input}
              validate={[required, isNumber]}
            />
          </div>
        </label>
        <div className={css.isActive}>
          <Field name="active" component={CheckboxInput} />
          <span>Активировать</span>
        </div>
        <div className={css.btns}>
          <Link to="/products">
            <Button type="button" clear={true}>
              Отмена
            </Button>
          </Link>
          <Button type="submit" destructive={true}>
            Сохранить
          </Button>
        </div>
      </FormBlock>
    </div>
  );
};

export default Price;
