import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";
import FormBlockLine from "Common/FormBlockLine/FormBlockLine";
import ModalButton from "Common/ModalButton/ModalButton";
import Smiles from "Common/Smiles/Smiles";
import TextAreaInput from "Common/TextAreaInput/TextAreaInput";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "utils/validators";
import css from "./NewNoteForm.module.css";

const NewNoteForm = ({ noteIsAdding, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormBlockLine>
        <Smiles className={css.smiles} />
        <FormBlockLabel>
          Новая заметка
          <Field
            name="comment"
            component={TextAreaInput}
            className={css.area}
            validate={[required]}
            anim={noteIsAdding}
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
        <ModalButton>Добавить</ModalButton>
      </FormBlockLine>
    </form>
  );
};

export default reduxForm({
  form: "ordAddNoteForm",
  initialValues: { visible: true },
})(NewNoteForm);
