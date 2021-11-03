import React from "react";
import List from "./List";
import { useQuery } from "utils/utils";
import { useSelector } from "react-redux";
import { getOrders } from "selectors/orders-selectors";

const ListContainer = ({ ...props }) => {
  const orders = useSelector((state) => getOrders(state));

  const query = useQuery();
  const sort = {};
  ["creationDate", "changeDate", "name", "phone", "status", "price"].forEach(
    (param) => {
      sort[param] = {};
      query.set("sort", param);
      query.set("page", 1);
      query.set("dir", 1);
      sort[param].up = `/orders/all?${query.toString()}`;
      query.set("dir", -1);
      sort[param].down = `/orders/all?${query.toString()}`;
      query.delete("sort");
      query.delete("dir");
    }
  );

  return <List sort={sort} orders={orders} {...props} />;
};

export default ListContainer;
