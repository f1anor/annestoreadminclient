import React from "react";
import css from "./CheckButtons.module.css";
import { Field } from "redux-form";
import { ReactComponent as TruckIcon } from "assets/svg/truck.svg";
import { ReactComponent as ShopIcon } from "assets/svg/shop.svg";

const CheckButtons = ({ ...props }) => {
  return (
    <div className={css.btnsLine}>
      <label>
        <Field
          name="delivery"
          className={css.radio}
          component="input"
          type="radio"
          value="1"
        />
        <div className={css.btn}>
          <div className={css.checkIcn} />
          <div className={css.inner}>
            <TruckIcon />
            <div>Доставка</div>
          </div>
        </div>
      </label>
      <label>
        <Field
          name="delivery"
          className={css.radio}
          component="input"
          type="radio"
          value="2"
        />
        <div className={css.btn}>
          <div className={css.checkIcn} />
          <div className={css.inner}>
            <ShopIcon />
            <div>Самовывоз</div>
          </div>
        </div>
      </label>
    </div>
  );
};
export default CheckButtons;
