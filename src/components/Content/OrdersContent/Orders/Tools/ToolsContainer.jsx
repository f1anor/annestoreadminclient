import withFilters from "hoc/withFilters";
import React from "react";
import Tools from "./Tools";

const ToolsContainer = ({ filters, ...props }) => {
  return <Tools {...props} />;
};
export default withFilters(ToolsContainer);
