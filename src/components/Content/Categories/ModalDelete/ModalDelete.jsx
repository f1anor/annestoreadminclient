import React from "react";
import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import ModalText from "Common/ModalText/ModalText";
import css from "./ModalDelete.module.css";
import { ReactComponent as AlertIcon } from "assets/svg/exclamation-triangle.svg";

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
