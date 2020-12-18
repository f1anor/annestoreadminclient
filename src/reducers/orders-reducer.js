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
} from "../actionTypes";

const initialState = {
  isFetching: null,
  orders: {}, //	Все заказы
  currentOrders: [], // Заказы на странице
  counts: {},
  totalCount: null,
  isAddedSuccess: null,
  isStatusChanging: null,
  isEditing: null,
  isEditingSuccess: null,
  note: null,
  img: null,
  message: null,
  lastParams: "", //Последние параметны просмотра таблицы
};

export default (state = initialState, { type, payload }) => {
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
    default:
      return state;
  }
};
