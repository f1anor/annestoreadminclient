import { ADD_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS } from "../actionTypes";

const initialState = {
  isFetching: null,
  orders: {},
  currentOrders: [],
  counts: {},
  totalCount: null,
  isAddedSuccess: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        isAddedSuccess: true,
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
    default:
      return state;
  }
};
