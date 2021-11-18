import React from "react";
import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import ModalText from "Common/ModalText/ModalText";
import css from "./ModalDelete.module.css";
import { ReactComponent as AlertIcon } from "assets/svg/exclamation-triangle.svg";
import Button from "Common/Button/Button";

const ModalDelete = ({ handleCloseModal, handleRemove, name }) => {
  return (
    <Modal close={handleCloseModal} className={css.wrapper}>
      <ModalTitle icon={<AlertIcon className={css.icon} />}>
        Удаление категории
      </ModalTitle>
      <ModalText>
        Внимание! Вы собираетесь удалить категорию{" "}
        <span className={css.name}>{name}</span>. <br />
        Данное действие является необратимым. Удаление категории повлечет за
        собой удаление категории во всех продуктах данной категории.
      </ModalText>
      <div className={css.btnsLine}>
        <Button
          type="button"
          data-modal-close="true"
          secondary="true"
          modal="true"
        >
          Отменить
        </Button>
        <Button type="button" onClick={handleRemove} modal="true">
          Ok
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
