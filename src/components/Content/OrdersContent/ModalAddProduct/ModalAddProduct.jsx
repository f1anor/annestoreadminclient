import Input from "Common/Input/Input";
import Modal from "Common/Modal/Modal";
import ModalText from "Common/ModalText/ModalText";
import ModalTitle from "Common/ModalTitle/ModalTitle";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { isNumber, required } from "utils/validators";
import css from "./ModalAddProduct.module.css";
import { ReactComponent as PlusIcon } from "assets/svg/file-earmark-plus.svg";
import ModalButton from "Common/ModalButton/ModalButton";

const ModalAddProduct = ({
  handleCloseModal,
  handleSubmit,
  productAddingAnim,
}) => {
  return (
    <Modal close={handleCloseModal} className={css.modal}>
      <ModalTitle icon={<PlusIcon className={css.icon} />}>
        Добавить продукт
      </ModalTitle>
      <ModalText>Убедитесь что вводите корректный артукул продукта.</ModalText>
      <form onSubmit={handleSubmit}>
        <Field
          component={Input}
          name="name"
          className={css.input}
          validate={[required, isNumber]}
          anim={productAddingAnim}
        />
        <div className={css.btnsLine}>
          <ModalButton type="button" data-modal-close="true" secondary={true}>
            Отмена
          </ModalButton>
          <ModalButton>Подтвердить</ModalButton>
        </div>
      </form>
    </Modal>
  );
};
export default reduxForm({ form: "ordAddProdForm" })(ModalAddProduct);
