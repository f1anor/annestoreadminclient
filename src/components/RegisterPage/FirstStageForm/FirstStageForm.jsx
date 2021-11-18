import ModalButton from "Common/ModalButton/ModalButton";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import CodeInputContainer from "./CodeInput/CodeInputContainer";
import css from "./FirstStageForm.module.css";

const FirstStageForm = ({ handleSubmit, disabled }) => {
  return (
    <form onSubmit={handleSubmit} className={css.wrapper}>
      <div className={css.inner}>
        <ModalTitle className={css.title}>Код приглашения</ModalTitle>
        <Field component={CodeInputContainer} name="code" disabled={disabled} />
      </div>
      <div className={css.btns}>
        <ModalButton disabled={disabled} anim={disabled}>
          Далее
        </ModalButton>
        <Link to="/" className={disabled ? css.disabled : ""}>
          <ModalButton secondary={true} type="button">
            Отмена
          </ModalButton>
        </Link>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "regFirstStageForm",
  initialValues: {
    code: ["", "", "", "", "", ""],
  },
})(FirstStageForm);
