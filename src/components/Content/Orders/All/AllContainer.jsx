import React from "react";
import { connect } from "react-redux";
import All from "./All";
import {
  fetchOrders,
  clearNote,
  toggleEditingSuccess,
  setLastParams,
} from "actions/orders-actions";
import { getOrders, getOrdDisabled } from "selectors/orders-selectors";
import { useEffect } from "react";
import { useQuery } from "utils/utils";

const AllContainer = ({
  fetchOrders,
  isEditingSuccess,
  toggleEditingSuccess,
  setLastParams,
  ...props
}) => {
  const query = useQuery().toString();

  useEffect(() => {
    if (!!isEditingSuccess) toggleEditingSuccess();
  }, [isEditingSuccess, toggleEditingSuccess]);

  useEffect(() => {
    fetchOrders(query);
    setLastParams(query);
  }, [fetchOrders, setLastParams, query]);

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
