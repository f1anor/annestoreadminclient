import withFilters from "hoc/withFilters";
import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import DateFormFilter from "./DateToFilter";

const DateFromFilterContainer = ({ query, filters, ...props }) => {
  const pathName = useLocation().pathname;
  const history = useHistory();

  let minDate = null;

  const f = { ...filters };

  const { date } = f;

  let startDate = null;

  if (date && date["$lt"]) {
    startDate = new Date(+date["$lt"]);
  }

  if (!!date && date["$gt"]) {
    minDate = date["$gt"];
  }

  const handleTimeChange = (value) => {
    const date = new Date(+value);
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    if (!f.date) {
      f.date = {};
    }

    f.date["$lt"] = date.getTime();
    query.set("filter", JSON.stringify(f));
    history.push(`${pathName}?${query.toString()}`);
  };

  return (
    <DateFormFilter
      startDate={startDate}
      handleTimeChange={handleTimeChange}
      minDate={minDate}
    />
  );
};
export default withFilters(DateFromFilterContainer);
