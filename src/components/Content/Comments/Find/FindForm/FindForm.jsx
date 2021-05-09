import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "Common/Input/Input";
import TooltipBtn from "Common/TooltipBtn/TooltipBtn";
import css from "./FindForm.module.css";
import { required } from "utils/validators";
import { Link } from "react-router-dom";

const FindForm = ({ error, handleSubmit, id }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label className={css.label}>
        Артикул
        <Field
          name="article"
          component={Input}
          validate={[required]}
          placeholder={id || ""}
        />
        <TooltipBtn value="Только цифры" />
      </label>
      <div className={css.btns}>
        <Link to="/comments/?page=1">
          <button type="button" className={css.cancelBtn}>
            Отмена
          </button>
        </Link>
        <button className={css.apply}>Найти</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "findProduct",
})(FindForm);
