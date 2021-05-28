import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";
import FormBlockLine from "Common/FormBlockLine/FormBlockLine";
import ModalText from "Common/ModalText/ModalText";
import React from "react";
import { Field, reduxForm } from "redux-form";
import css from "./AddManagerNoteForm.module.css";
import TextAreaInput from "Common/TextAreaInput/TextAreaInput";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import { required } from "utils/validators";
import Smiles from "Common/Smiles/Smiles";
import ModalButton from "Common/ModalButton/ModalButton";

const AddManagerNoteForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <ModalText>
        Выберете эмоцию, которой вы можете охарактеризовать общение с заказчиком
      </ModalText>

      <Smiles />
      <FormBlockLine>
        <FormBlockLabel>
          Коротко и ёмко
          <Field
            name="comment"
            component={TextAreaInput}
            className={css.area}
            validate={[required]}
          />
        </FormBlockLabel>
      </FormBlockLine>
      <FormBlockLine>
        <FormBlockLabel check={true}>
          <Field name="visible" component={CheckboxInput} />
          Отображать другим пользователям
        </FormBlockLabel>
      </FormBlockLine>
      <FormBlockLine double={true}>
        <ModalButton secondary={true} type="button" data-modal-close="true">
          Отмена
        </ModalButton>
        <ModalButton>Сохранить</ModalButton>
      </FormBlockLine>
    </form>
  );
};
export default reduxForm({
  form: "ordAddNoteForm",
  initialValues: { visible: true },
})(AddManagerNoteForm);
