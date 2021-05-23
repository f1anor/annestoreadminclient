import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useQuery } from "utils/utils";

const withPageRedirect = (Comp) => {
  const WrapperComponent = (props) => {
    const pathname = useLocation().pathname;
    const query = useQuery();

    const page = query.get("page");
    if (!page) return <Redirect to={`${pathname}?page=1`} />;
    return <Comp {...props} />;
  };

  return WrapperComponent;
};
export default withPageRedirect;
