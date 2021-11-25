import {
  INIT_APP,
  ADD_TOAST_MESSAGE,
  REMOVE_TOAST_MESSAGE,
  SET_IMG,
  SET_TOOLTIP,
  SET_TABLE_SIZE,
  SET_SIDEBAR_TYPE,
} from "../actionTypes";
import { restore } from "./auth-actions";

export const initApp = () => async (dispatch, getState) => {
  await dispatch(restore());
  dispatch(setTableSize());

  if (document.documentElement.clientWidth <= 1680) dispatch(setSidebarType(1));

  let timeout = null;

  // Слушаем ресайз и выставляем размер таблицы
  window.onresize = (e) => {
    clearTimeout(timeout);
    timeout = null;

    timeout = setTimeout(() => {
      const state = getState();
      const windowHeight = state.app.tableSize.window;
      if (windowHeight !== window.innerHeight) {
        dispatch(setTableSize());
      }

      // складываем сайдбар при маленькой ширине экрана
      const sidebarType = state.app.sidebarType;

      if (document.documentElement.clientWidth <= 1680 && sidebarType === 0)
        dispatch(setSidebarType(1));
    }, 200);
  };
  dispatch({
    type: INIT_APP,
  });
};

export const addToastMessage =
  (text, variant = "primary") =>
  (dispatch) => {
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

export const setImg = (imgs, comments) => (dispatch) => {
  dispatch({
    type: SET_IMG,
    payload: { imgs: imgs ?? [], comments: comments ?? null },
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
      size:
        window.innerHeight - 486 - 100 > 76
          ? Math.floor((window.innerHeight - 486 - 100) / 76)
          : 1,
      window: window.innerHeight,
    },
  });
};

export const setSidebarType = (val) => (dispatch) => {
  dispatch({
    type: SET_SIDEBAR_TYPE,
    payload: val,
  });
};
