import {
  FETCH_ADMINS_FAILURE,
  FETCH_ADMINS_START,
  FETCH_ADMINS_SUCCESS,
  TOGGLE_ACCESS_FAILURE,
  TOGGLE_ACCESS_START,
  TOGGLE_ACCESS_SUCCESS,
} from "../actionTypes";

import { fetchAdminsApi, toggleAccessApi } from "../api/users-api";

export const fetchAdmins = (query) => async (dispatch) => {
  dispatch({
    type: FETCH_ADMINS_START,
  });

  try {
    const ans = await fetchAdminsApi(query);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_ADMINS_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ADMINS_FAILURE,
      payload: err.message,
    });
  }
};

export const toggleAccess = (status, id, query) => async (dispatch) => {
  dispatch({
    type: TOGGLE_ACCESS_START,
  });

  try {
    const ans = await toggleAccessApi(status, id);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: TOGGLE_ACCESS_SUCCESS,
    });

    dispatch(fetchAdmins(query));
  } catch (err) {
    console.info(err);
    dispatch({
      type: TOGGLE_ACCESS_FAILURE,
      payload: err.message,
    });
  }
};
