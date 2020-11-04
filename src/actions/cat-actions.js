import {
  ADD_CAT_FAILURE,
  ADD_CAT_START,
  ADD_CAT_SUCCESS,
  CLEAR_SELECT_CAT,
  FETCH_CAT_FAILURE,
  FETCH_CAT_START,
  FETCH_CAT_SUCCESS,
  MOVE_UP_CAT_FAILURE,
  MOVE_UP_CAT_START,
  MOVE_UP_CAT_SUCCESS,
  MOVE_DOWN_CAT_FAILURE,
  MOVE_DOWN_CAT_START,
  MOVE_DOWN_CAT_SUCCESS,
  REMOVE_CAT_FAILURE,
  REMOVE_CAT_START,
  REMOVE_CAT_SUCCESS,
  SELECT_CAT,
} from "../actionTypes";
import {
  addCatApi,
  fetchCategoriesApi,
  removeCatApi,
  moveUpCatApi,
  moveDownCatApi,
} from "../api/cat-api";
import { getSelectedNumber } from "../selectors/cat-selectors";

export const addCat = (title) => async (dispatch) => {
  dispatch({
    type: ADD_CAT_START,
  });

  try {
    const ans = await addCatApi(title);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: ADD_CAT_SUCCESS,
    });
    dispatch(fetchCategories());
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_CAT_FAILURE,
      payload: err.message,
    });
  }
};

export const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: FETCH_CAT_START,
  });

  try {
    const ans = await fetchCategoriesApi();
    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_CAT_SUCCESS,
      payload: ans.data.categories,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: FETCH_CAT_FAILURE,
      payload: err.message,
    });
  }
};

export const selectCat = (num) => (dispatch) => {
  dispatch({
    type: SELECT_CAT,
    payload: num,
  });
};

export const clearSelectCat = () => (dispatch) => {
  dispatch({
    type: CLEAR_SELECT_CAT,
  });
};

export const removeCat = () => async (dispatch, getState) => {
  const num = getSelectedNumber(getState());
  if (!num) return;

  dispatch({
    type: REMOVE_CAT_START,
  });

  try {
    const ans = await removeCatApi(num);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: REMOVE_CAT_SUCCESS,
    });
    dispatch(fetchCategories());
  } catch (err) {
    console.log(err);
    dispatch({
      type: REMOVE_CAT_FAILURE,
      payload: err.message,
    });
  }
};

export const moveUpCat = () => async (dispatch, getState) => {
  const num = getSelectedNumber(getState());
  if (!num) return;
  dispatch({
    type: MOVE_UP_CAT_START,
  });

  try {
    const ans = await moveUpCatApi(num);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: MOVE_UP_CAT_SUCCESS,
    });
    dispatch(fetchCategories());
  } catch (err) {
    console.log(err);
    dispatch({
      type: MOVE_UP_CAT_FAILURE,
      payload: err.message,
    });
  }
};

export const moveDownCat = () => async (dispatch, getState) => {
  const num = getSelectedNumber(getState());
  if (!num) return;
  dispatch({
    type: MOVE_DOWN_CAT_START,
  });

  try {
    const ans = await moveDownCatApi(num);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: MOVE_DOWN_CAT_SUCCESS,
    });
    dispatch(fetchCategories());
  } catch (err) {
    console.log(err);
    dispatch({
      type: MOVE_DOWN_CAT_FAILURE,
      payload: err.message,
    });
  }
};
