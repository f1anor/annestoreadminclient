import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "Common/Input/Input";
import TooltipBtn from "Common/TooltipBtn/TooltipBtn";
import css from "./FindForm.module.css";
import { required } from "utils/validators";
import { Link } from "react-router-dom";
import Button from "Common/Button/Button";

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
          <Button clear="true">Сброс</Button>
        </Link>
        <Button className={css.findBtn}>Найти</Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "findProduct",
})(FindForm);
