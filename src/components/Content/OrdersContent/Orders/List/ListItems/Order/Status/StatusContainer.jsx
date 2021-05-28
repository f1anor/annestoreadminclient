import { changeStatus } from "actions/orders-actions";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "utils/utils";
import Status from "./Status";

const StatusContainer = React.memo(({ currentStatus, id, ...props }) => {
  const dispatch = useDispatch();
  const query = useQuery().toString();
  const { type } = useParams();

  const allStatus = [
    {
      title: "Новый",
      value: "new",
      color: "#baefff",
    },
    {
      title: "В обработке",
      value: "process",
      color: "#eae6ff",
    },
    {
      title: "Проблемный",
      value: "warning",
      color: "#fff1b4",
    },
    {
      title: "Доставка",
      value: "delivery",
      color: "#abf5d2",
    },
    {
      title: "Завершенный",
      value: "completed",
      color: "#edeef2",
    },
  ];

  const status = allStatus.find((status) => status.value === currentStatus);

  const handleChangeStatus = (value) => {
    dispatch(changeStatus(id, value, type, query));
  };
  return (
    <Status
      allStatus={allStatus}
      status={status}
      handleChangeStatus={handleChangeStatus}
      {...props}
    />
  );
});
export default StatusContainer;
