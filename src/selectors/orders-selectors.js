import { createSelector } from "reselect";

// Массив с ID заказов на странице
export const getCurrentOrders = (state) => {
  return state.orders.currentOrders;
};

// Все заказы
export const getAllOrders = (state) => {
  return state.orders.orders;
};

// Один отдельный заказ
export const getOrder = (state) => {
  return state.orders.order;
};

export const getLastOrders = (state) => {
  return state.orders.lastOrders;
};

// Количество заказов
export const getTotalCount = (state) => {
  return state.orders.totalCount;
};

// Текущие заказы на странице
export const getOrders = createSelector(
  getCurrentOrders,
  getAllOrders,
  (currentOrders, allOrders) => {
    return currentOrders.map((order) => {
      return allOrders[order];
    });
  }
);

// Получение заметок
export const getOrderNotes = (state) => {
  return state.orders.orderNotes;
};

// Процессы
export const getIsFetching = (state) => {
  return state.orders.isFetching;
};

export const getNoteIsAdding = (state) => {
  return state.orders.isNoteAdding;
};

export const getIsFetchSingle = (state) => {
  return state.orders.isFetchSingle;
};

export const getIsProductAdding = (state) => {
  return state.orders.isProductAdding;
};

export const getIsDeleting = (state) => {
  return state.orders.isDeleting;
};

export const getIsStatusChanging = (state) => {
  return state.orders.isStatusChanging;
};

export const getIsAdding = (state) => {
  return state.orders.isAdding;
};

export const getIsEditing = (state) => {
  return state.orders.isEditing;
};

export const getIsDeliveryPriceGetting = (state) => {
  return state.orders.isDeliveryPriceGetting;
};

export const getOrdDisabled = createSelector(
  getIsFetching,
  getIsFetchSingle,
  getIsProductAdding,
  getIsDeleting,
  getIsStatusChanging,
  getIsAdding,
  getIsEditing,
  getIsDeliveryPriceGetting,
  (
    isFetching,
    isFetchSingle,
    isProductAdding,
    isDeleting,
    isStatusChanging,
    isAdding,
    isEditing,
    isDeliveryPriceGetting
  ) => {
    return (
      isFetching ||
      isFetchSingle ||
      isProductAdding ||
      isDeleting ||
      isStatusChanging ||
      isAdding ||
      isEditing ||
      isDeliveryPriceGetting
    );
  }
);

// Флаги добавления редактирования заказа

export const getIsOrderAddingSuccess = (state) => {
  return state.orders.isAddedSuccess;
};

export const getIsOrderEditingSuccess = (state) => {
  return state.orders.isEditingSuccess;
};

// Состояние модальных окон
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

export const getModalOrderManagerNotes = (state) => {
  return state.orders.modalOrderManagerNotes;
};

export const getModalOrderError = (state) => {
  return state.orders.message;
};
