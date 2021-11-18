import React from "react";
import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";

import css from "./ModalNew.module.css";
import { reduxForm } from "redux-form";

import { ReactComponent as PlusIcon } from "assets/svg/file-earmark-plus.svg";
import MainCatForm from "Common/MainCatForm/MainCatForm";
import Button from "Common/Button/Button";

const ModalNew = ({ handleModalClose, handleSubmit, adding }) => {
  return (
    <>
      <Modal close={handleModalClose} className={css.modal}>
        <ModalTitle icon={<PlusIcon className={css.icon} />}>
          Добавление категории
        </ModalTitle>

        <form onSubmit={handleSubmit}>
          <MainCatForm />
          <div className={css.btnsLine}>
            <Button
              type="button"
              secondary="true"
              disabled={adding}
              data-modal-close="true"
              modal="true"
            >
              Отмена
            </Button>
            <Button disabled={adding} anim={adding} modal="true">
              Ок
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default reduxForm({
  form: "newCatForm",
  initialValues: { sizeTable: [], type: 0 },
})(ModalNew);
