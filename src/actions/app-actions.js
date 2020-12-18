import {
  INIT_APP,
  ADD_TOAST_MESSAGE,
  REMOVE_TOAST_MESSAGE,
  SET_IMG,
} from "../actionTypes";
import { restore } from "./auth-actions";

export const initApp = () => async (dispatch) => {
  await dispatch(restore());
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
