import {
  FETCH_STATISTIC_FAILURE,
  FETCH_STATISTIC_START,
  FETCH_STATISTIC_SUCCESS,
} from "../actionTypes";
import { fetchStatisticApi } from "../api/dashboard-api";

export const fetchStatistic = (query) => async (dispatch) => {
  dispatch({
    type: FETCH_STATISTIC_START,
  });

  try {
    const ans = await fetchStatisticApi(query);

    if (!!ans.data.status) throw new Error(ans.data.message);
    console.log(ans);
    dispatch({
      type: FETCH_STATISTIC_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: FETCH_STATISTIC_FAILURE,
      payload: err.message,
    });
  }
};
