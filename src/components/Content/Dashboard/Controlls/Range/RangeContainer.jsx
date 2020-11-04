import React from "react";
import { useQuery } from "../../../../../utils/utils";
import Range from "./Range";

const RangeConitainer = ({ ...props }) => {
  const query = useQuery();

  let currentRange = query.get("range");

  const paramsArr = [
    { name: "День", value: "day" },
    { name: "Неделя", value: "week" },
    { name: "Месяц", value: "month" },
    { name: "Год", value: "year" },
  ].map((item) => {
    query.set("range", item.value);
    item.link = `/dashboard/?${query.toString()}`;
    query.delete("range");
    return item;
  });

  currentRange = paramsArr.filter((param) => param.value === currentRange);
  currentRange = currentRange.length > 0 ? currentRange[0].name : null;

  return <Range paramsArr={paramsArr} currentRange={currentRange} {...props} />;
};

export default RangeConitainer;
