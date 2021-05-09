import React from "react";
import { Alert } from "react-bootstrap";
import ProductsTable from "./ProductsTable/ProductsTable";
import css from "./ProductTableInput.module.css";

const ProductTableInput = ({
  handleOpenModal,
  value,
  form,
  error,
  touched,
  editMode,
  delivery,
}) => {
  const isError = touched && error;
  return (
    <>
      {!!isError && <Alert variant="danger">{error}</Alert>}
      <ProductsTable value={value} form={form} editMode={editMode} />
      <div className={css.btns}>
        <button
          className={css.addBtn}
          onClick={() => handleOpenModal(true)}
          disabled={!editMode}
          type="button"
        >
          Добавить
        </button>
      </div>
    </>
  );
};

export default ProductTableInput;
