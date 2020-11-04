import React from "react";
import { connect } from "react-redux";
import Type from "./Type";
import { useQuery } from "utils/utils";

const TypeContainer = ({ counts }) => {
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

  console.log(status, currentStatus);

  return <Type currentStatus={currentStatus} status={status} counts={counts} />;
};

const mapStateToProps = (state) => ({
  counts: state.orders.counts,
});

export default connect(mapStateToProps, {})(TypeContainer);
