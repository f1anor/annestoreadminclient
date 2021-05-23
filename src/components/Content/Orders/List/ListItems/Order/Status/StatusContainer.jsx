import { changeStatus } from "actions/orders-actions";
import React from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "utils/utils";
import Status from "./Status";

const StatusContainer = React.memo(({ currentStatus, id, ...props }) => {
  const dispatch = useDispatch();
  const query = useQuery();

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

  const handleChangeStatus = (e) => {
    const target = e.target.closest("button");
    const value = target.getAttribute("data-key");
    dispatch(changeStatus(id, value, query));
  };
  return (
    <Status
      allStatus={allStatus}
      status={status}
      handleChangeStatus={handleChangeStatus}
    />
  );
});
export default StatusContainer;
