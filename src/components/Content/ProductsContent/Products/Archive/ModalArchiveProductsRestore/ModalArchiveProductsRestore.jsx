import React from "react";
import Modal from "Common/Modal/Modal";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import ModalText from "Common/ModalText/ModalText";
import css from "./ModalArchiveProductsRestore.module.css";
import { ReactComponent as AlertIcon } from "assets/svg/exclamation-triangle.svg";
import { formatNumber } from "utils/utils";

const ModalArchiveProductsRestore = ({
  handleCloseModal,
  handeRestore,
  ids,
}) => {
  return (
    <Modal close={handleCloseModal} className={css.wrapper}>
      <ModalTitle icon={<AlertIcon className={css.icon} />}>
        Восстановить
      </ModalTitle>
      <ModalText>
        Внимание! Вы собираетесь восстановить продукт(ы){" "}
        <span
          style={{
            color: "var(--color-red)",
            fontFamily: "var(--font-medium)",
          }}
        >
          {ids.map((data, index) => (
            <span key={data}>
              #{formatNumber(+data, 5)}
              {index !== ids.length - 1 && ", "}
            </span>
          ))}
        </span>
        <br />
        Без повторной активации они не будут отображаться в магазине.
      </ModalText>
      <div className={css.btnsLine}>
        <button type="button" data-modal-close="true">
          Отменить
        </button>
        <button type="button" onClick={handeRestore}>
          Подтвердить
        </button>
      </div>
    </Modal>
  );
};

export default ModalArchiveProductsRestore;
