import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStatistic } from "../../../actions/dashboard-actions";
import { useQuery } from "../../../utils/utils";
import Dashboard from "./Dashboard";

const DashboardContainer = ({ fetchStatistic, ...props }) => {
  const query = useQuery().toString();

  useEffect(() => {
    fetchStatistic(query);
  }, [fetchStatistic, query]);
  return <Dashboard {...props} />;
};
const mapStateToProps = (state) => ({
  data: state.dashboard.data,
  sessions: state.dashboard.sessions,
  totalCount: state.dashboard.totalCount,
  isFetching: state.dashboard.isFetching,
});

export default connect(mapStateToProps, { fetchStatistic })(DashboardContainer);
