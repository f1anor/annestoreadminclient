import React from "react";
import { useLocation } from "react-router-dom";
import { getDropdounPath, useQuery } from "../../../../../../utils/utils";
import Status from "./Status";

const StatusContainer = (props) => {
  const query = useQuery();
  const location = useLocation();

  const status = query.get("status");

  const pathObj = getDropdounPath(
    [
      { title: "Подтвержден", value: 1 },
      { title: "Не потвержден", value: 0 },
    ],
    "status",
    query,
    location
  );

  return <Status pathObj={pathObj} {...props} />;
};

export default StatusContainer;
