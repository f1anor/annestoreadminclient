import { fetchSessions } from "actions/dashboard-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getIsSessionsFetching,
  getSessions,
  getTotalCount,
} from "selectors/dashboard-selectors";
import { useQuery } from "utils/utils";
import Sessions from "./Sessions";

const SessionsContainer = () => {
  const dispatch = useDispatch();
  const pathName = useLocation().pathname;

  const sessions = useSelector((state) => getSessions(state));
  const totalCount = useSelector((state) => getTotalCount(state));
  const isFetching = useSelector((state) => getIsSessionsFetching(state));

  const query = useQuery();
  const page = query.get("page");
  useEffect(() => {
    dispatch(fetchSessions(page));
  }, [dispatch, page]);

  return (
    <Sessions
      pathName={pathName}
      totalCount={totalCount}
      sessions={sessions}
      isFetching={isFetching}
    />
  );
};

export default SessionsContainer;
