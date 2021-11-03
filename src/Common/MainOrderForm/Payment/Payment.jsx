import React from "react";
import { Field } from "redux-form";
import Input from "Common/Input/Input";
import FormBlock from "Common/FormBlock/FormBlock";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import FormBlockLine from "Common/FormBlockLine/FormBlockLine";
import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import css from "./Payment.module.css";
import { Link } from "react-router-dom";

const Payment = ({ price, customPrice }) => {
  return (
    <FormBlock>
      <FormBlockTitle>Подтверждение</FormBlockTitle>
      <FormBlockLine>
        <FormBlockLabel>
          Сумма к оплате
          <Field component={Input} name="price" disabled={!!customPrice} />
        </FormBlockLabel>
      </FormBlockLine>

      <FormBlockLine>
        <FormBlockLabel check={true}>
          <Field component={CheckboxInput} name="customPrice" />
          <span>Рассчитать автоматически</span>
        </FormBlockLabel>
      </FormBlockLine>
      <div className={css.btns}>
        <Link to="/orders/all">
          <button type="button" className={css.cancelBtn}>
            Отмена
          </button>
        </Link>

        <button type="submit" className={css.submit}>
          Сохранить
        </button>
      </div>
    </FormBlock>
  );
};

export default Payment;
