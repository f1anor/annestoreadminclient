import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { editOrder } from "../../../../../actions/orders-actions";
import { getOrdDisabled } from "../../../../../selectors/orders-selectors";
import EditForm from "./EditForm";

const EditFormContainer = ({
  editOrder,
  id,
  isEditing,
  isDisabled,
  ...props
}) => {
  const [editMode, setEditMode] = useState(null);

  const handleSave = (values) => {
    editOrder(id, values);
  };

  return (
    <EditForm
      onSubmit={handleSave}
      editMode={editMode}
      setEditMode={setEditMode}
      isEditing={isEditing || isDisabled}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  isEditing: state.orders.isEditing,
  isDisabled: getOrdDisabled(state),
  lastParams: state.orders.lastParams,
});

export default connect(mapStateToProps, { editOrder })(EditFormContainer);
