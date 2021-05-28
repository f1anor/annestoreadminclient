import React, { useEffect } from "react";
import { editOrder, fetchEditOrder } from "actions/orders-actions";
import { useDispatch } from "react-redux";
import EditOrder from "./EditOrder";
import { useParams } from "react-router-dom";

const EditOrderContainer = ({ ...props }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEditOrder(id));
  }, [id]);

  const handleSubmit = (values) => {
    dispatch(editOrder(id, values));
  };
  return <EditOrder onSubmit={handleSubmit} />;
};
export default EditOrderContainer;
