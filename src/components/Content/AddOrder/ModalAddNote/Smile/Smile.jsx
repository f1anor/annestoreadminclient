import React from "react";
import css from "./Smile.module.css";
import { ReactComponent as Smile1Icon } from "assets/svg/smile-1.svg";
import { ReactComponent as Smile2Icon } from "assets/svg/smile-2.svg";
import { ReactComponent as Smile3Icon } from "assets/svg/smile-3.svg";
import { ReactComponent as Smile4Icon } from "assets/svg/smile-4.svg";
import { ReactComponent as Smile5Icon } from "assets/svg/smile-5.svg";
import { Field } from "redux-form";

const Smile = ({ ...props }) => {
  return (
    <div className={css.smileLine}>
      <label>
        <Field
          name="smile"
          className={css.radio}
          component="input"
          type="radio"
          value="1"
        />
        <div className={css.button} type="button">
          <Smile5Icon />
        </div>
      </label>

      <label>
        <Field
          name="smile"
          className={css.radio}
          component="input"
          type="radio"
          value="2"
        />
        <div className={css.button} type="button">
          <Smile4Icon />
        </div>
      </label>

      <label>
        <Field
          name="smile"
          className={css.radio}
          component="input"
          type="radio"
          value="3"
        />
        <div className={css.button} type="button">
          <Smile3Icon />
        </div>
      </label>

      <label>
        <Field
          name="smile"
          className={css.radio}
          component="input"
          type="radio"
          value="4"
        />
        <div className={css.button} type="button">
          <Smile2Icon />
        </div>
      </label>

      <label>
        <Field
          name="smile"
          className={css.radio}
          component="input"
          type="radio"
          value="5"
        />
        <div className={css.button} type="button">
          <Smile1Icon />
        </div>
      </label>
    </div>
  );
};
export default Smile;
