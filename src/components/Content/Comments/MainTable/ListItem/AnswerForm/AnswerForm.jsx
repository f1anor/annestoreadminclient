import React from "react";
import { reduxForm, Field } from "redux-form";
import TextAreaInput from "Common/TextAreaInput/TextAreaInput";
import css from "./AnswerForm.module.css";
import Button from "Common/Button/Button";

const AnswerForm = ({ handleSubmit, handleClearAns }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h6 className={css.title}>Ответ</h6>
      <Field component={TextAreaInput} name="content" className={css.area} />
      <div className={css.btns}>
        <Button type="button" onClick={handleClearAns} clear="true" mini="true">
          Отмена
        </Button>
        <Button mini="true" className={css.saveBtn}>
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "commentAnswerForm" })(AnswerForm);
