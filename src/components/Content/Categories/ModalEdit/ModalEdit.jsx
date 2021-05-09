import React from "react";
import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import ModalText from "Common/ModalText/ModalText";
import Input from "Common/Input/Input";
import css from "./ModalEdit.module.css";
import { reduxForm, Field } from "redux-form";
import { required } from "utils/validators";
import { ReactComponent as PenIcon } from "assets/svg/pen.svg";

const ModalEdit = ({ handleSubmit, handleCloseModal }) => {
  return (
    <Modal className={css.modal} close={handleCloseModal}>
      <ModalTitle icon={<PenIcon className={css.icon} />}>
        Изменить название
      </ModalTitle>
      <ModalText>
        Изменение названия категори проведет к изменению отображения категории в
        продуктах!
      </ModalText>
      <form onSubmit={handleSubmit}>
        <Field
          component={Input}
          name="name"
          className={css.input}
          validate={[required]}
        />
        <div className={css.btnsLine}>
          <button type="button" data-modal-close="true">
            Отмена
          </button>
          <button>Подтвердить</button>
        </div>
      </form>
    </Modal>
  );
};

export default reduxForm({ form: "catEditForm" })(ModalEdit);
