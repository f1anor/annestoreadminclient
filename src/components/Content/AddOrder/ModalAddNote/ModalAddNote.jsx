import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import React from "react";
import css from "./ModalAddNote.module.css";
import { ReactComponent as CommentIcon } from "assets/svg/chat-square-dots-fill.svg";
import ModalText from "Common/ModalText/ModalText";
import TextAreaInput from "Common/TextAreaInput/TextAreaInput";
import FormBlockLine from "Common/FormBlockLine/FormBlockLine";
import FormBlockLabel from "Common/FormBlockLabel/FormBlockLabel";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import ModalButton from "Common/ModalButton/ModalButton";
import { reduxForm, Field } from "redux-form";
import { required } from "utils/validators";
import Smile from "./Smile/Smile";

const ModalAddNote = ({ handleCloseModal, handleSubmit, ...props }) => {
  return (
    <Modal close={handleCloseModal} className={css.modal}>
      <ModalTitle icon={<CommentIcon className={css.icon} />}>
        Добавить замечание
      </ModalTitle>
      <ModalText>
        Выберете эмоцию, которой вы можете охарактеризовать общение с заказчиком
      </ModalText>
      <form onSubmit={handleSubmit}>
        <Smile />
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
    </Modal>
  );
};
export default reduxForm({
  form: "ordAddNoteForm",
  initialValues: { visible: true },
})(ModalAddNote);
