import React from "react";
import { useSelector } from "react-redux";
import { getTotalCount } from "selectors/orders-selectors";
import TotalCounter from "./TotalCounter";

const TotalCounterContainer = ({ ...props }) => {
  const totalCount = useSelector((state) => getTotalCount(state));
  return <TotalCounter totalCount={totalCount} {...props} />;
};
export default TotalCounterContainer;
