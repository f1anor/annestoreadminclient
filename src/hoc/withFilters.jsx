import React from "react";
import { useQuery } from "../utils/utils";

export default (Comp) => {
  const WrapperComponent = (props) => {
    const query = useQuery();
    const filters = JSON.parse(query.get("filter") || "{}");
    return <Comp query={query} filters={filters} {...props} />;
  };

  return WrapperComponent;
};
