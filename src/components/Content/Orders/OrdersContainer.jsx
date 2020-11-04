import React from "react";
import { connect } from "react-redux";
import Orders from "./Orders";

const OrdersContainer = (props) => {
  return <Orders {...props} />;
};
const mapStateToProps = (state) => ({
  isAddedSuccess: state.orders.isAddedSuccess,
});
export default connect(mapStateToProps, {})(OrdersContainer);
