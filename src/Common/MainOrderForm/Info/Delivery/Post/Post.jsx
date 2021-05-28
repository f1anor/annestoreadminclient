import React from "react";
import css from "./Post.module.css";
import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";
import FormBlockLine from "Common/FormBlockLine/FormBlockLine";
import { Field } from "redux-form";
import Adress from "./Adress/Adress";
import { required } from "utils/validators";
import Input from "Common/Input/Input";
import { ReactComponent as CalcIcon } from "assets/svg/calculator.svg";
import TooltipBtn from "Common/TooltipBtn/TooltipBtn";

const Post = ({ postIndex, handleGetDeliveryPrice, deliveryPriceAnim }) => {
  return (
    <div>
      <div className={css.info}>
        <span className={css.accent1}>Внимание!</span> Доставка осуществляется
        "Почтой России". Время доставки в среднем составляет от 5 до 20 дней.
        Стоимость доставки рассчитывается индивидуально. Убедитесь в
        корректности введенного адреса и почтового индекса. Оплата
        осуществляется заранее и в полной мере, перед отправлением посылки.
      </div>
      <FormBlockLine>
        <FormBlockLabel>
          Адресс доставки
          <Field name="adress" component={Adress} validate={[required]} />
          <TooltipBtn value="Начать ввод и выбрать один из предложенных вариантов для автозаполнения почтового индекса" />
        </FormBlockLabel>
      </FormBlockLine>
      <FormBlockLine double="true">
        <FormBlockLabel>
          Почтовый индекс
          <Field name="postIndex" component={Input} />
        </FormBlockLabel>
        <div className={css.checkPriceBtnWrapper}>
          <button
            type="button"
            disabled={!postIndex}
            onClick={handleGetDeliveryPrice}
            className={css.checkPriceBtn}
          >
            <CalcIcon className={css.calcIcon} />
          </button>
        </div>
      </FormBlockLine>
      <FormBlockLine double="true">
        <FormBlockLabel>
          Стоимость отправления
          <Field
            name="deliveryPrice"
            component={Input}
            anim={deliveryPriceAnim}
          />
        </FormBlockLabel>
      </FormBlockLine>
    </div>
  );
};
export default Post;
