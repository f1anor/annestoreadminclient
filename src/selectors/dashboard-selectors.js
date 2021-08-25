export const getChartData = (state) => {
  return state.dashboard.data;
};

export const getSessions = (state) => {
  return state.dashboard.sessions;
};

export const getTotalCount = (state) => {
  return state.dashboard.totalCount;
};

export const getIsFetching = (state) => {
  return state.dashboard.isFetching;
};
