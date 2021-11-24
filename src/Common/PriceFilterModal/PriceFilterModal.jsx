import Input from "Common/Input/Input";
import Modal from "Common/Modal/Modal";
import ModalText from "Common/ModalText/ModalText";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { isNumber, required } from "utils/validators";
import { ReactComponent as WalletIcon } from "assets/svg/wallet2.svg";
import css from "./PriceFilterModal.module.css";
import Button from "Common/Button/Button";

const PriceFilterModal = ({
  children,
  handleCloseModal,
  handleSubmit,
  validator,
}) => {
  return (
    <Modal close={handleCloseModal} className={css.modal}>
      <ModalTitle icon={<WalletIcon className={css.icon} />}>
        Фильтр по стоимости
      </ModalTitle>
      <ModalText>{children}</ModalText>
      <form onSubmit={handleSubmit}>
        <Field
          component={Input}
          name="value"
          className={css.input}
          validate={[validator || required, isNumber]}
        />
        <div className={css.btnsLine}>
          <Button
            type="button"
            data-modal-close="true"
            modal="true"
            secondary={true}
          >
            Отмена
          </Button>
          <Button modal="true">Подтвердить</Button>
        </div>
      </form>
    </Modal>
  );
};
export default reduxForm({ form: "ordPriceFilter" })(PriceFilterModal);
