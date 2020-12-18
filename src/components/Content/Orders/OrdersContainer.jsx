import React from "react";
import { connect } from "react-redux";
import Orders from "./Orders";
import { getOrdDisabled } from "selectors/orders-selectors";
import { useRouteMatch } from "react-router-dom";
import { setImg } from "../../../actions/orders-actions";

const OrdersContainer = (props) => {
  const isEdit = useRouteMatch("/orders/edit/:id");
  return <Orders isEdit={isEdit} {...props} />;
};

const mapStateToProps = (state) => ({
  isAddedSuccess: state.orders.isAddedSuccess,
  isDisabled: getOrdDisabled(state),
  isEditingSuccess: state.orders.isEditingSuccess,
  img: state.orders.img,
  lastParams: state.orders.lastParams,
});

export default connect(mapStateToProps, { setImg })(OrdersContainer);
