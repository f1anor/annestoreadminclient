import React from "react";
import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import ModalText from "Common/ModalText/ModalText";
import css from "./ModalEdit.module.css";
import { reduxForm } from "redux-form";
import { ReactComponent as PenIcon } from "assets/svg/pen.svg";
import MainCatForm from "Common/MainCatForm/MainCatForm";
import Button from "Common/Button/Button";

const ModalEdit = ({ handleSubmit, handleCloseModal, disabled, editing }) => {
  return (
    <Modal className={css.modal} close={handleCloseModal}>
      <ModalTitle icon={<PenIcon className={css.icon} />} anim={disabled}>
        Редактировать
      </ModalTitle>
      <ModalText>
        Изменение названия категори проведет к изменению отображения категории в
        продуктах!
      </ModalText>
      <form onSubmit={handleSubmit}>
        <MainCatForm />
        <div className={css.btnsLine}>
          <Button
            type="button"
            secondary="true"
            disabled={disabled || editing}
            data-modal-close="true"
            modal="true"
          >
            Отмена
          </Button>
          <Button disabled={disabled || editing} anim={editing} modal="true">
            Ок
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default reduxForm({ form: "catEditForm" })(ModalEdit);
