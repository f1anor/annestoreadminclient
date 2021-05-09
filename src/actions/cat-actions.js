import { stopSubmit } from "redux-form";
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
  RENAME_CAT_START,
  RENAME_CAT_SUCCESS,
  RENAME_CAT_FAILURE,
  SET_MODAL_EDIT,
  SET_MODAL_DELETE,
  SET_MODAL_NEW,
} from "../actionTypes";
import {
  addCatApi,
  fetchCategoriesApi,
  removeCatApi,
  moveUpCatApi,
  moveDownCatApi,
  renameCatApi,
} from "../api/cat-api";
import { addToastMessage } from "./app-actions";

export const fetchCategories = (query) => async (dispatch) => {
  dispatch({
    type: FETCH_CAT_START,
  });

  try {
    const ans = await fetchCategoriesApi(query);
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

export const removeCat = (num) => async (dispatch) => {
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

    dispatch(setModalDelete(null));
    dispatch(addToastMessage(`Категория удалена`));
    dispatch(fetchCategories());
  } catch (err) {
    console.log(err);
    dispatch({
      type: REMOVE_CAT_FAILURE,
      payload: err.message,
    });
  }
};

export const moveUpCat = (num) => async (dispatch) => {
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

export const moveDownCat = (num) => async (dispatch) => {
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

export const addCat = (values) => (dispatch) => {
  dispatch({
    type: ADD_CAT_START,
  });
  addCatApi(values)
    .then((ans) => {
      if (!!ans.data.status) {
        try {
          const error = JSON.parse(ans.data.message);
          dispatch(stopSubmit("newCatForm", error));
          dispatch({ type: ADD_CAT_FAILURE, payload: error });
        } catch (err) {
          dispatch(stopSubmit("newCatForm", { _error: ans.data.message }));
          dispatch({ type: ADD_CAT_FAILURE, payload: err.message });
        }
      } else {
        dispatch({
          type: ADD_CAT_SUCCESS,
        });
        dispatch(setModalNew(null));
        dispatch(fetchCategories());
      }
    })
    .catch((err) => {
      dispatch({ type: ADD_CAT_FAILURE, payload: err.message });
    });
};

export const renameCat = (id, values) => (dispatch) => {
  dispatch({
    type: RENAME_CAT_START,
  });

  renameCatApi(id, values)
    .then((ans) => {
      if (!!ans.data.status) {
        try {
          const error = JSON.parse(ans.data.message);
          dispatch(stopSubmit("catEditForm", error));
        } catch (err) {
          dispatch(stopSubmit("catEditForm", { _error: ans.data.message }));
        }
      } else {
        dispatch({
          type: RENAME_CAT_SUCCESS,
        });
        dispatch(setModalEdit(null));
        dispatch(fetchCategories());
      }
    })
    .catch((err) => {
      dispatch({ type: RENAME_CAT_FAILURE, payload: err.message });
    });
};

export const setModalEdit = (id) => (dispatch) => {
  dispatch({
    type: SET_MODAL_EDIT,
    payload: id,
  });
};

export const setModalNew = (status) => (dispatch) => {
  dispatch({
    type: SET_MODAL_NEW,
    payload: status,
  });
};

export const setModalDelete = (info) => (dispatch) => {
  dispatch({
    type: SET_MODAL_DELETE,
    payload: info,
  });
};
