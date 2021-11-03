import { createSelector } from "reselect";

export const getChartData = (state) => {
  return state.dashboard.data;
};

export const getSessions = (state) => {
  return state.dashboard.sessions;
};

export const getTotalCount = (state) => {
  return state.dashboard.totalCount;
};

export const getUsersForStatistic = (state) => {
  return state.dashboard.usersForStatistic;
};

export const getProductsForStatistic = (state) => {
  return state.dashboard.productsForStatistic;
};

export const getOrdersForStatistic = (state) => {
  return state.dashboard.ordersForStatistic;
};

export const getTotalCashForStatistic = (state) => {
  return state.dashboard.totalCashForStatistic;
};

export const getPlatformStatistic = (state) => {
  return state.dashboard.platformStatistic;
};

// Состояния

export const getIsPlatformStatisticFetching = (state) => {
  return state.dashboard.isPlatformStatisticFetching;
};

export const getIsFetching = (state) => {
  return state.dashboard.isFetching;
};

export const getIsUsersForStatisticFetching = (state) => {
  return state.dashboard.isUsersForStatisticFetching;
};

export const getIsProductsForStatisticFetching = (state) => {
  return state.dashboard.isProductsForStatisticFetching;
};

export const getIsOrdersForStatisticFetching = (state) => {
  return state.dashboard.isOrdersForStatisticFetching;
};

export const getIsTotalCashForStatisticFetching = (state) => {
  return state.dashboard.isTotalCashForStatisticFetching;
};

export const getIsSessionsFetching = (state) => {
  return state.dashboard.isSessionsFetching;
};

export const getIsStatisticDisabled = createSelector(
  getIsPlatformStatisticFetching,
  getIsFetching,
  getIsUsersForStatisticFetching,
  getIsProductsForStatisticFetching,
  getIsOrdersForStatisticFetching,
  getIsTotalCashForStatisticFetching,
  getIsSessionsFetching,
  (
    isPlatformStatisticFetching,
    isFetching,
    isUsersForStatisticFetching,
    isProductsForStatisticFetching,
    isOrdersForStatisticFetching,
    isTotalCashForStatisticFetching,
    isSessionsFetching
  ) => {
    return (
      !!isPlatformStatisticFetching ||
      !!isFetching ||
      !!isUsersForStatisticFetching ||
      !!isProductsForStatisticFetching ||
      !!isOrdersForStatisticFetching ||
      !!isTotalCashForStatisticFetching ||
      !!isSessionsFetching
    );
  }
);
