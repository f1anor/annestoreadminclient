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
