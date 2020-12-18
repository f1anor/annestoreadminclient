import {
  FETCH_ADMINS_FAILURE,
  FETCH_ADMINS_START,
  FETCH_ADMINS_SUCCESS,
  TOGGLE_ACCESS_FAILURE,
  TOGGLE_ACCESS_START,
  TOGGLE_ACCESS_SUCCESS,
} from "../actionTypes";

const initialState = {
  admins: {},
  currentAdmins: [],
  total: null,
  isFetching: false,
  message: null,
  isTogglingAccess: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ADMINS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ADMINS_SUCCESS:
      const obj = {};
      payload.admins.forEach((item) => (obj[item._id] = item));
      return {
        ...state,
        isFetching: false,
        admins: obj,
        currentAdmins: payload.admins.map((item) => item._id),
      };
    case FETCH_ADMINS_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: payload.message,
      };
    case TOGGLE_ACCESS_START:
      return {
        ...state,
        isTogglingAccess: true,
      };
    case TOGGLE_ACCESS_SUCCESS:
      return {
        ...state,
        isTogglingAccess: false,
      };
    case TOGGLE_ACCESS_FAILURE:
      return {
        ...state,
        isTogglingAccess: false,
        message: payload.message,
      };
    default:
      return state;
  }
};
