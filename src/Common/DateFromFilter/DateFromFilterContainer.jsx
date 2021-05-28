import withFilters from "hoc/withFilters";
import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import DateFormFilter from "./DateFormFilter";

const DateFromFilterContainer = ({ query, filters, ...props }) => {
  const pathName = useLocation().pathname;
  const history = useHistory();

  let maxDate = null;

  const f = { ...filters };

  const { date } = f;

  let startDate = null;

  if (date && date["$gt"]) {
    startDate = new Date(+date["$gt"]);
  }

  if (!!date && date["$lt"]) {
    maxDate = date["$lt"];
  }

  const handleTimeChange = (date) => {
    if (!f.date) {
      f.date = {};
    }

    f.date["$gt"] = date.getTime();
    query.set("filter", JSON.stringify(f));
    history.push(`${pathName}?${query.toString()}`);
  };

  return (
    <DateFormFilter
      startDate={startDate}
      handleTimeChange={handleTimeChange}
      maxDate={maxDate}
      {...props}
    />
  );
};
export default withFilters(DateFromFilterContainer);
