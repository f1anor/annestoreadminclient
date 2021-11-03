import { fetchUsersForStatistic } from "actions/dashboard-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersForStatistic } from "selectors/dashboard-selectors";
import TotralUsers from "./TotralUsers";

const TotalUsersContainer = React.memo(({ ...props }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => getUsersForStatistic(state));

  useEffect(() => {
    dispatch(fetchUsersForStatistic());
  }, [dispatch]);

  return <TotralUsers users={users} />;
});

export default TotalUsersContainer;
