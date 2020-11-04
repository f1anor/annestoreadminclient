import React from "react";
import { connect } from "react-redux";
import All from "./All";
import { fetchOrders } from "actions/orders-actions";
import { getOrders } from "selectors/orders-selectors";
import { useEffect } from "react";
import { useQuery } from "utils/utils";
import { useState } from "react";

const AllContainer = ({ fetchOrders, orders, totalCount }) => {
  const [modalImgShow, setModalImgShow] = useState(null);
  const query = useQuery().toString();
  useEffect(() => {
    fetchOrders(query);
  }, [fetchOrders, query]);
  return (
    <All
      orders={orders}
      totalCount={totalCount}
      modalImgShow={modalImgShow}
      setModalImgShow={setModalImgShow}
    />
  );
};

const mapStateToProps = (state) => ({
  orders: getOrders(state),
  totalCount: state.orders.totalCount,
});

export default connect(mapStateToProps, { fetchOrders })(AllContainer);
