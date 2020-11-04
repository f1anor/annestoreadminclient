import React from "react";
import { useHistory } from "react-router-dom";
import Controlls from "./Controlls";

import { useQuery } from "../../../../utils/utils";

const ControllsContainer = () => {
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

  return (
    <Controlls startDate={startDate} handleTimeChange={handleTimeChange} />
  );
};

export default ControllsContainer;
