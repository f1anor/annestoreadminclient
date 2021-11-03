import React from "react";
import { useQuery } from "utils/utils";
import Tools from "./Tools";

const ToolsContainer = () => {
  const query = useQuery();
  // Удаляем временной промежуток.
  query.delete("time");

  const rangeParam = query.get("range");
  let currentRange = query.get("range");

  const paramsArr = [
    { name: "День", value: "day" },
    { name: "Неделя", value: "week" },
    { name: "Все время", value: "all" },
  ].map((item) => {
    query.set("range", item.value);
    item.link = `/dashboard/?${query.toString()}`;
    query.delete("range");
    return item;
  });

  currentRange = paramsArr.filter((param) => param.value === currentRange);
  currentRange = currentRange.length > 0 ? currentRange[0].name : null;

  return (
    <Tools
      currentRange={currentRange}
      paramsArr={paramsArr}
      rangeParam={rangeParam}
    />
  );
};
export default ToolsContainer;
