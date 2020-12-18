import React from "react";
import { connect } from "react-redux";
import Type from "./Type";
import { useQuery } from "utils/utils";
import { getOrdDisabled } from "selectors/orders-selectors";

const TypeContainer = ({ counts, isDisabled }) => {
  const query = useQuery();
  const currentStatus = query.get("status");

  const status = {};
  [
    "all",
    "new",
    "process",
    "warning",
    "success",
    "completed",
    "deleted",
  ].forEach((item) => {
    query.delete("status");
    query.set("status", item);
    query.set("page", 1);
    status[item] = `/orders/all?${query.toString()}`;
  });

  return (
    <Type
      currentStatus={currentStatus}
      status={status}
      counts={counts}
      isDisabled={isDisabled}
    />
  );
};

const mapStateToProps = (state) => ({
  counts: state.orders.counts,
  isDisabled: getOrdDisabled(state),
});

export default connect(mapStateToProps, {})(TypeContainer);
