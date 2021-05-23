import React from "react";
import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import ModalText from "Common/ModalText/ModalText";
import css from "./ModalDelete.module.css";
import { ReactComponent as AlertIcon } from "assets/svg/exclamation-triangle.svg";

const ModalDelete = ({
  handleCloseModal,
  handleRemove,
  title = "Удаление",
  children,
}) => {
  return (
    <Modal close={handleCloseModal} className={css.wrapper}>
      <ModalTitle icon={<AlertIcon className={css.icon} />}>{title}</ModalTitle>
      <ModalText>{children}</ModalText>
      <div className={css.btnsLine}>
        <button type="button" data-modal-close="true">
          Отменить
        </button>
        <button type="button" onClick={handleRemove}>
          Подтвердить
        </button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
