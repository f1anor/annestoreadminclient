import React from "react";
import { reduxForm } from "redux-form";
import MainOrderForm from "../../../../../Common/MainOrderForm/MainOrderForm";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditForm = ({
  form,
  setEditMode,
  editMode,
  handleSubmit,
  isEditing,
  lastParams,
}) => {
  const disabled = !isEditing && editMode;
  console.log(disabled);
  return (
    <>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mt-5">
          {!!editMode ? (
            <>
              <Button
                variant="success"
                type="submit"
                style={{ width: "200px" }}
              >
                {!!isEditing ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Сохранить изменения"
                )}
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => setEditMode(false)}
                className="ml-2"
              >
                Отменить
              </Button>
            </>
          ) : (
            <>
              <input
                type="button"
                className="btn btn-primary"
                onClick={() => setEditMode(true)}
                value="Редактировать"
              />
              <Link to={`/orders/all?${lastParams ? lastParams : "page=1"}`}>
                <Button variant="outline-primary" className="ml-2">
                  Закрыть
                </Button>
              </Link>
            </>
          )}
        </div>
        <MainOrderForm formName={form} editMode={disabled} />
      </form>
    </>
  );
};

export default reduxForm({ form: "editOrder" })(EditForm);
