import React from "react";
import List from "./List";
import { useQuery } from "utils/utils";

const ListContainer = ({ ...props }) => {
  const query = useQuery();
  const sort = {};
  [
    "number",
    "creationDate",
    "changeDate",
    "firstName",
    "phone",
    "status",
  ].forEach((param) => {
    sort[param] = {};
    query.set("sort", param);
    query.set("page", 1);
    query.set("dir", 1);
    sort[param].up = `/orders/all?${query.toString()}`;
    query.set("dir", -1);
    sort[param].down = `/orders/all?${query.toString()}`;
    query.delete("sort");
    query.delete("dir");
  });

  return <List sort={sort} {...props} />;
};

export default ListContainer;
