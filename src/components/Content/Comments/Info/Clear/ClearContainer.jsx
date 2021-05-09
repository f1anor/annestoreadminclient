import React from "react";
import Clear from "./Clear";
import { getQuery } from "utils/utils";
import { useLocation } from "react-router-dom";

const ClearContainer = () => {
  const location = useLocation();
  const query = getQuery(location);
  query.delete("stars");
  return <Clear link={`${location.pathname}?${query.toString()}`} />;
};

export default ClearContainer;
