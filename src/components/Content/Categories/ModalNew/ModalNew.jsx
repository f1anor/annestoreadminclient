import React from "react";
import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import ModalText from "Common/ModalText/ModalText";
import Input from "Common/Input/Input";
import css from "./ModalNew.module.css";
import { reduxForm, Field } from "redux-form";
import { required } from "utils/validators";
import { ReactComponent as PlusIcon } from "assets/svg/file-earmark-plus.svg";

const ModalNew = ({ handleModalClose, handleSubmit }) => {
  return (
    <>
      <Modal close={handleModalClose} className={css.modal}>
        <ModalTitle icon={<PlusIcon className={css.icon} />}>
          Добавление категории
        </ModalTitle>

        <ModalText>
          Внимание! Новая категория не будет отображатья пользователям пока в
          ней отсутствуют продукты.
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
            <button>Добавить</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default reduxForm({ form: "newCatForm" })(ModalNew);
