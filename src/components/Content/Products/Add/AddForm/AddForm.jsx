import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { reduxForm } from "redux-form";
import MainProductForm from "../../../../../Common/MainProductForm/MainProductForm";

const AddForm = ({
  handleSubmit,
  catForForm,
  change,
  isAdding,
  handleClear,
  isCatFetching,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {!isCatFetching && (
        <>
          <MainProductForm catForForm={catForForm} />
          <div className="d-flex justify-content-start mb-5">
            <Button style={{ width: "100px" }} type="submit">
              {!!isAdding ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Добавить"
              )}
            </Button>
            <Button className="ml-2" onClick={handleClear}>
              Очистить
            </Button>
          </div>
        </>
      )}
    </form>
  );
};

export default reduxForm({ form: "addProduct" })(AddForm);
