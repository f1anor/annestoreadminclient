import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "utils/utils";
import Callendar from "./Callendar";

const CallendarContainer = ({ rangeParam }) => {
  const maxDate = Date.now();
  let minDate = maxDate - 604800000 * 2;

  switch (rangeParam) {
    case "all":
      minDate = maxDate - 1;
      break;
    case "day":
      minDate = maxDate - 604800000 * 2;
      break;
    case "week":
      minDate = maxDate - 604800000;
      break;
    default:
      minDate = maxDate - 604800000;
  }

  const history = useHistory();
  const query = useQuery();

  const handleTimeChange = (date) => {
    query.set("time", date.getTime());
    history.push(`/dashboard/?${query.toString()}`);
  };

  const startDate = new Date(+query.get("time") || Date.now());
  startDate.setHours(0);
  startDate.setMinutes(0);
  startDate.setSeconds(0);
  startDate.setMilliseconds(0);

  return (
    <Callendar
      maxDate={maxDate}
      minDate={minDate}
      handleTimeChange={handleTimeChange}
      startDate={startDate}
    />
  );
};
export default CallendarContainer;
