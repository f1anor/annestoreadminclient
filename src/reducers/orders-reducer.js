import {
  ADD_ORDER_SUCCESS,
  FETCH_ORDERS_SUCCESS,
  CLEAR_NOTE,
  SET_NOTE,
  CHANGE_STATUS_START,
  CHANGE_STATUS_SUCCESS,
  CHANGE_STATUS_FAILURE,
  FETCH_ORDERS_START,
  FETCH_ORDERS_FAILURE,
  EDIT_ORDER_START,
  EDIT_ORDER_SUCCESS,
  TOGGLE_EDITING_SUCCESS,
  EDIT_ORDER_FAILURE,
  FETCH_EDIT_ORDER_START,
  FETCH_EDIT_ORDER_FAILURE,
  FETCH_EDIT_ORDER_SUCCESS,
  SET_IMG,
  SET_LAST_PARAMS,
  SET_MODAL_ADD_PRODUCT,
  SET_MODAL_ADD_MANAGER_NOTE,
  GET_DELIVERY_PRICE_SUCCESS,
  SET_MODAL_PRICE_FILTER,
  SET_MODAL_ORDER_DELETE,
  SET_MODAL_ORDER_PREVIEW,
  FETCH_ORDER_SUCCESS,
} from "../actionTypes";

const initialState = {
  orders: {}, //	Все заказы
  currentOrders: [], // Заказы на странице
  order: null, // Один заказ, который просматривается
  counts: {},
  pageSize: null,
  totalCount: null,
  isFetching: null,
  isAddedSuccess: null,
  isStatusChanging: null,
  isEditing: null,
  isEditingSuccess: null,
  note: null,
  img: null,
  message: null,
  lastParams: "", //Последние параметны просмотра таблицы
  modalAddProduct: null,
  modalAddManagerNote: null,
  modalPriceFilter: null,
  modalOrderDelete: null,
  modalOrderPreview: { id: null, print: null },
};

export const ordersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        isAddedSuccess: true,
      };
    case FETCH_ORDERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ORDERS_SUCCESS:
      const obj = {};
      payload.orders.forEach((item) => (obj[item._id] = item));
      return {
        ...state,
        orders: obj,
        currentOrders: payload.orders.map((item) => item._id),
        counts: payload.counts,
        isFetching: null,
        totalCount: payload.total,
        isAddedSuccess: null,
      };
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: null,
        message: payload,
      };
    case CLEAR_NOTE:
      return {
        ...state,
        note: null,
      };
    case SET_NOTE:
      return {
        ...state,
        note: payload,
      };
    case SET_IMG:
      return {
        ...state,
        img: payload,
      };
    case CHANGE_STATUS_START:
      return {
        ...state,
        isStatusChanging: true,
      };
    case CHANGE_STATUS_SUCCESS:
      return {
        ...state,
        isStatusChanging: null,
      };
    case CHANGE_STATUS_FAILURE:
      return {
        ...state,
        isStatusChanging: null,
        message: payload,
      };
    case EDIT_ORDER_START:
      return {
        ...state,
        isEditing: true,
      };
    case EDIT_ORDER_SUCCESS:
      return {
        ...state,
        isEditing: null,
        isEditingSuccess: true,
      };
    case EDIT_ORDER_FAILURE:
      return {
        ...state,
        isEditing: null,
      };
    case TOGGLE_EDITING_SUCCESS:
      return {
        ...state,
        isEditingSuccess: false,
      };
    case FETCH_EDIT_ORDER_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_EDIT_ORDER_SUCCESS:
      return {
        ...state,
        isFetching: null,
      };
    case FETCH_EDIT_ORDER_FAILURE:
      return {
        ...state,
        isFetching: null,
        message: payload,
      };
    case SET_LAST_PARAMS:
      return {
        ...state,
        lastParams: payload,
      };

    case GET_DELIVERY_PRICE_SUCCESS:
      return {
        ...state,
      };
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        order: payload.order,
      };
    // Управление модальным окном добавления продукта в заказ
    case SET_MODAL_ADD_PRODUCT:
      return {
        ...state,
        modalAddProduct: payload,
      };
    // Управление модальным окном добавления заметки менеджера в заказ
    case SET_MODAL_ADD_MANAGER_NOTE:
      return {
        ...state,
        modalAddManagerNote: payload,
      };
    // Управление модальным окном фильтра стоимости
    case SET_MODAL_PRICE_FILTER:
      return {
        ...state,
        modalPriceFilter: payload,
      };
    // Управление модальным окном удаления заказа
    case SET_MODAL_ORDER_DELETE:
      return {
        ...state,
        modalOrderDelete: payload,
      };
    // Управление модальным окном предпросмотра заказа
    case SET_MODAL_ORDER_PREVIEW:
      return {
        ...state,
        modalOrderPreview: payload,
      };
    default:
      return state;
  }
};
