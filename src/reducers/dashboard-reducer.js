import {
  FETCH_STATISTIC_FAILURE,
  FETCH_STATISTIC_START,
  FETCH_STATISTIC_SUCCESS,
} from "../actionTypes";

const initialState = {
  data: [],
  isFetching: false,
  message: null,
};

export const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STATISTIC_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_STATISTIC_SUCCESS:
      return {
        ...state,
        data: payload.data,
        sessions: payload.sessionsOnPage,
        totalCount: payload.totalCount,
        isFetching: false,
      };
    case FETCH_STATISTIC_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: payload.message,
      };
    default:
      return state;
  }
};
