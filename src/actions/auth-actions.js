import { change, stopSubmit } from "redux-form";
import {
  REG_NEW_ADMIN_FAILURE,
  REG_NEW_ADMIN_START,
  REG_NEW_ADMIN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  TOGGLE_LOG,
  TOGGLE_REG,
  RESTORE_START,
  RESTORE_SUCCESS,
  RESTORE_FAILURE,
  SIGN_OUT,
  PRELOAD_AVATAR_START,
  PRELOAD_AVATAR_SUCCESS,
  PRELOAD_AVATAR_FAILURE,
} from "../actionTypes";
import instance, { setAuthToken } from "../api";
import {
  preloadAvatarApi,
  regNewAdminApi,
  signInApi,
  restoreApi,
} from "../api/auth-api";
import { addToastMessage } from "./app-actions";

export const preloadAvatar = (img, name) => async (dispatch) => {
  dispatch({
    type: PRELOAD_AVATAR_START,
  });

  try {
    const ans = await preloadAvatarApi(img, name);

    dispatch(change("regForm", name, { preloadedImg: ans.data.file }));
    dispatch({
      type: PRELOAD_AVATAR_SUCCESS,
      payload: ans.data.file,
    });
  } catch (err) {
    dispatch({
      type: PRELOAD_AVATAR_FAILURE,
      payload: err.message,
    });
  }
};

export const regNewAdmin = (values) => (dispatch) => {
  dispatch({
    type: REG_NEW_ADMIN_START,
  });

  regNewAdminApi(values)
    .then((ans) => {
      if (!!ans.data.status) {
        throw new Error(ans.data.message);
      } else {
        dispatch({
          type: REG_NEW_ADMIN_SUCCESS,
        });
      }
    })
    .catch((err) => {
      console.info(err);
      dispatch(stopSubmit("regForm", { _error: err.message }));
      dispatch({
        type: REG_NEW_ADMIN_FAILURE,
        payload: err.message,
      });
    });
};

export const signIn = (values) => (dispatch) => {
  dispatch({
    type: SIGN_IN_START,
  });

  signInApi(values)
    .then((ans) => {
      if (!!ans.data.status) throw new Error(ans.data.message);
      const { token } = ans.data;
      localStorage.setItem("jwt", token);
      setAuthToken(token, instance);
      dispatch({
        type: SIGN_IN_SUCCESS,
      });
      dispatch(restore());
    })
    .catch((err) => {
      dispatch(stopSubmit("logForm", { _error: err.message }));
      dispatch({
        type: SIGN_IN_FAILURE,
        payload: err.message,
      });
    });
};

export const toggleReg = () => (dispatch) => {
  dispatch({
    type: TOGGLE_REG,
  });
};

export const toggleLog = () => (dispatch) => {
  dispatch({
    type: TOGGLE_LOG,
  });
};

export const restore = () => async (dispatch) => {
  dispatch({
    type: RESTORE_START,
  });

  try {
    const ans = await restoreApi();
    if (!!ans.data.status) throw new Error(ans.data.message);
    dispatch({
      type: RESTORE_SUCCESS,
      payload: ans.data.user,
    });
    dispatch(
      addToastMessage(
        `Вы вошли в систему как ${ans.data.user.firstName} ${ans.data.user.lastName}`
      )
    );
  } catch (err) {
    console.info(err);
    dispatch({
      type: RESTORE_FAILURE,
      payload: err.message,
    });
  }
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch({
    type: SIGN_OUT,
  });
};
