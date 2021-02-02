import {
  INIT_APP,
  ADD_TOAST_MESSAGE,
  REMOVE_TOAST_MESSAGE,
  SET_IMG,
  SET_TOOLTIP,
  SET_TABLE_SIZE,
} from "../actionTypes";
import { restore } from "./auth-actions";

export const initApp = () => async (dispatch, getState) => {
  await dispatch(restore());
  dispatch(setTableSize());

  let timeout = null;

  window.onresize = () => {
    clearTimeout(timeout);
    timeout = null;

    timeout = setTimeout(() => {
      const windowHeight = getState().app.tableSize.window;
      if (windowHeight !== window.innerHeight) {
        dispatch(setTableSize());
      }
    }, 2000);
  };
  dispatch({
    type: INIT_APP,
  });
};

export const addToastMessage = (text, variant = "primary") => (dispatch) => {
  dispatch({
    type: ADD_TOAST_MESSAGE,
    payload: { text, variant },
  });
};

export const removeToastMessage = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_TOAST_MESSAGE,
    payload: id,
  });
};

export const setImg = (img) => (dispatch) => {
  dispatch({
    type: SET_IMG,
    payload: img,
  });
};

export const setTooltip = (text, target) => (dispatch) => {
  dispatch({
    type: SET_TOOLTIP,
    payload: { text, target },
  });
};

export const setTableSize = () => (dispatch) => {
  dispatch({
    type: SET_TABLE_SIZE,
    payload: {
      size: Math.floor((window.innerHeight - 357 - 100) / 70),
      window: window.innerHeight,
    },
  });
};
