import React from "react";
import { reduxForm, Field } from "redux-form";
import TextAreaInput from "Common/TextAreaInput/TextAreaInput";
import css from "./AnswerForm.module.css";

const AnswerForm = ({ handleSubmit, handleClearAns }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h6 className={css.title}>Ответ</h6>
      <Field component={TextAreaInput} name="content" className={css.area} />
      <div className={css.btns}>
        <button className={css.cancel} type="button" onClick={handleClearAns}>
          Отмена
        </button>
        <button className={css.success}>Сохранить</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "commentAnswerForm" })(AnswerForm);
