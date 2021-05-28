import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEditOrder } from "../../../../actions/orders-actions";
import Edit from "./Edit";

const EditContainer = ({ fetchEditOrder }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchEditOrder(id);
  }, [id, fetchEditOrder]);
  return <Edit id={id} />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { fetchEditOrder })(EditContainer);
