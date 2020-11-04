import React from "react";
import { useLocation } from "react-router-dom";
import TableTitle from "./TableTitle";

const TableTitleContainer = (props) => {
  const location = useLocation();
  const url = location.pathname + location.search;

  return <TableTitle url={url} {...props} />;
};

export default TableTitleContainer;
