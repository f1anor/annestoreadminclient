import { createSelector } from "reselect";

export const getCurrentOrders = (state) => {
  return state.orders.currentOrders;
};

export const getAllOrders = (state) => {
  return state.orders.orders;
};

export const getTotalCount = (state) => {
  return state.orders.totalCount;
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

export const getIsOrderAddingSuccess = (state) => {
  return state.orders.isAddedSuccess;
};

export const getIsOrderEditingSuccess = (state) => {
  return state.orders.isEditingSuccess;
};

export const getOrder = (state) => {
  return state.orders.order;
};

export const getModalAddProduct = (state) => {
  return state.orders.modalAddProduct;
};

export const getModalAddManagerNote = (state) => {
  return state.orders.modalAddManagerNote;
};

export const getDeliveryPrice = (state) => {
  return state.orders.deliveryPrice;
};

export const getModalPriceFilter = (state) => {
  return state.orders.modalPriceFilter;
};

export const getModalOrderDelete = (state) => {
  return state.orders.modalOrderDelete;
};

export const getModalOrderPreview = (state) => {
  return state.orders.modalOrderPreview;
};
