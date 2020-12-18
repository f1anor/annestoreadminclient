import { createSelector } from "reselect";

export const getCurrentOrders = (state) => {
  return state.orders.currentOrders;
};

export const getAllOrders = (state) => {
  return state.orders.orders;
};

export const getOrders = createSelector(
  getCurrentOrders,
  getAllOrders,
  (currentOrders, allOrders) => {
    return currentOrders.map((order) => {
      return allOrders[order];
    });
  }
);

export const getIsStatusChanging = (state) => {
  return state.orders.isStatusChanging;
};

export const getIsFetching = (state) => {
  return state.orders.isFetching;
};

export const getOrdDisabled = createSelector(
  getIsStatusChanging,
  getIsFetching,
  (isStatusChanging, isFetching) => {
    return isStatusChanging || isFetching;
  }
);
