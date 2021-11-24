import Modal from "Common/Modal/Modal";
import ModalText from "Common/ModalText/ModalText";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import React from "react";
import css from "./ModalError.module.css";
import Button from "Common/Button/Button";

const ModalError = ({ handleCloseModal, children, ...props }) => {
  return (
    <Modal close={handleCloseModal} className={css.wrapper}>
      <ModalTitle>Ошибка!</ModalTitle>

      <ModalText>
        <span dangerouslySetInnerHTML={{ __html: children }}></span>
      </ModalText>
      <div className={css.btnsLine}>
        <Button
          type="button"
          data-modal-close="true"
          modal={true}
          destructive={true}
        >
          Закрыть
        </Button>
      </div>
    </Modal>
  );
};
export default ModalError;
