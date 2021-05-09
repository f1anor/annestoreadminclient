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
  //TODO: Доделать
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
    // <Card className="h-100">
    //   <Card.Header as="h5">Оплата и доставка</Card.Header>
    //   <Card.Body>
    //     <Form.Group
    //       as={Row}
    //       controlId="formPlaintextPassword"
    //       className="mt-3 mb-0"
    //     >
    //       <Form.Label column sm="4">
    //         Сумма к оплате:
    //       </Form.Label>
    //       <Col sm="8">
    //         <Form.Control
    //           plaintext
    //           readOnly
    //           className="font-weight-bold"
    //           value={`${price}₽`}
    //         />
    //       </Col>
    //     </Form.Group>
    //     <Form.Group
    //       as={Row}
    //       controlId="formPlaintextPassword"
    //       className="mb-0 mt-3"
    //     >
    //       <Form.Label column sm="4">
    //         Адрес самовывоза:
    //       </Form.Label>
    //       <Col sm="8">
    //         <Field name="address" component={Input} placeholder="Адресс" />
    //       </Col>
    //     </Form.Group>
    //   </Card.Body>
    // </Card>
  );
};

export default Payment;
