import Modal from "Common/Modal/Modal";
import ModalText from "Common/ModalText/ModalText";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import React from "react";
import css from "./ModalError.module.css";

//TODO: сделать так чтобы вставка HTML в компоненте была безопасной
const ModalError = ({ handleCloseModal, children, ...props }) => {
  return (
    <Modal close={handleCloseModal} className={css.wrapper}>
      <ModalTitle>Ошибка!</ModalTitle>

      <ModalText>
        <span dangerouslySetInnerHTML={{ __html: children }}></span>
      </ModalText>
      <div className={css.btnsLine}>
        <button type="button" data-modal-close="true">
          Закрыть
        </button>
      </div>
    </Modal>
  );
};
export default ModalError;
