import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import AddModal from "./AddModal/AddModal";
import ProductsTable from "./ProductsTable/ProductsTable";

const ProductTableInput = ({
  modalAddShow,
  setModalAddShow,
  handleAddOrderProduct,
  value,
  form,
  error,
  touched,
  editMode,
}) => {
  const isError = touched && error;
  return (
    <>
      <Card className="mt-5">
        <Card.Header
          as="h5"
          className="d-flex justify-content-between align-items-center"
        >
          Состав заказа{" "}
          <Button
            variant="outline-primary"
            onClick={() => setModalAddShow(true)}
            disabled={!editMode}
          >
            Добавить
          </Button>
        </Card.Header>
        <Card.Body>
          {!!isError && <Alert variant="danger">{error}</Alert>}
          <ProductsTable value={value} form={form} editMode={editMode} />
        </Card.Body>
      </Card>
      <AddModal
        show={!!modalAddShow}
        handler={handleAddOrderProduct}
        inProgress={value.inProgress}
        message={value.message}
        onHide={() => setModalAddShow(null)}
      />
    </>
  );
};

export default ProductTableInput;
