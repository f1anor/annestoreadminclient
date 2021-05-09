import React from "react";
import { connect } from "react-redux";
import All from "./All";
import {
  clearNote,
  toggleEditingSuccess,
  setLastParams,
} from "actions/orders-actions";
import { getOrders, getOrdDisabled } from "selectors/orders-selectors";
import { useEffect } from "react";

const AllContainer = ({
  fetchOrders,
  isEditingSuccess,
  toggleEditingSuccess,
  setLastParams,
  ...props
}) => {
  useEffect(() => {
    if (!!isEditingSuccess) toggleEditingSuccess();
  }, [isEditingSuccess, toggleEditingSuccess]);

  return <All {...props} />;
};

const mapStateToProps = (state) => ({
  orders: getOrders(state),
  totalCount: state.orders.totalCount,
  note: state.orders.note,
  isDisabled: getOrdDisabled(state),
  isEditingSuccess: state.orders.isEditingSuccess,
});

export default connect(mapStateToProps, {
  fetchOrders,
  clearNote,
  toggleEditingSuccess,
  setLastParams,
})(AllContainer);
