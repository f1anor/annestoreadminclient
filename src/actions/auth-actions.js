import { change, focus, initialize, stopSubmit, touch } from "redux-form";
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
  CHECK_FIRST_STAGE_START,
  CHECK_FIRST_STAGE_SUCCESS,
  CHECK_FIRST_STAGE_FAILURE,
  CHECK_SECOND_STAGE_START,
  CHECK_SECOND_STAGE_SUCCESS,
  CHECK_SECOND_STAGE_FAILURE,
  SET_STAGE,
  CHECK_THIRD_STAGE_START,
  CHECK_THIRD_STAGE_FAILURE,
  CHECK_THIRD_STAGE_SUCCESS,
} from "../actionTypes";
import instance, { setAuthToken } from "../api";
import {
  preloadAvatarApi,
  regNewAdminApi,
  signInApi,
  restoreApi,
  checkFirstStageApi,
  checkSecondStageApi,
  checkThirdStageApi,
} from "../api/auth-api";
import { addToastMessage } from "./app-actions";

export const preloadAvatar = (img, name) => async (dispatch) => {
  dispatch({
    type: PRELOAD_AVATAR_START,
  });

  try {
    const ans = await preloadAvatarApi(img, name);

    dispatch(
      change("regFourthStageForm", "avatarTmp", { avatarTmp: ans.data.file })
    );
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

// Проверка кода приглашения в первом этапе регистрации
export const checkFirstStage = (val) => (dispatch) => {
  dispatch({
    type: CHECK_FIRST_STAGE_START,
  });

  checkFirstStageApi(val)
    .then((ans) => {
      if (!!ans.data.status) {
        try {
          const error = JSON.parse(ans.data.message);
          dispatch(stopSubmit("regFirstStageForm", error));
          dispatch({ type: CHECK_FIRST_STAGE_FAILURE, payload: error });
        } catch (err) {
          dispatch(
            stopSubmit("regFirstStageForm", { _error: ans.data.message })
          );
          dispatch({ type: CHECK_FIRST_STAGE_FAILURE, payload: err.message });
        }
      } else {
        dispatch({
          type: CHECK_FIRST_STAGE_SUCCESS,
          payload: val.code.join(""),
        });
        dispatch(setStage("1"));
      }
    })
    .catch((err) => {
      dispatch({ type: CHECK_FIRST_STAGE_FAILURE, payload: err.message });
    });
};

// Проверка данных введенных во втором этапе регистрации
export const checkSecondStage = (val) => (dispatch) => {
  dispatch({
    type: CHECK_SECOND_STAGE_START,
  });

  checkSecondStageApi(val)
    .then((ans) => {
      if (!!ans.data.status) {
        try {
          const error = JSON.parse(ans.data.message);
          dispatch(stopSubmit("regSecondStageForm", error));
          dispatch({ type: CHECK_SECOND_STAGE_FAILURE, payload: error });
        } catch (err) {
          dispatch(
            stopSubmit("regSecondStageForm", { _error: ans.data.message })
          );
          dispatch({ type: CHECK_SECOND_STAGE_FAILURE, payload: err.message });
        }
      } else {
        dispatch({
          type: CHECK_SECOND_STAGE_SUCCESS,
          payload: val,
        });
        dispatch(setStage("2"));
      }
    })
    .catch((err) => {
      dispatch({ type: CHECK_SECOND_STAGE_FAILURE, payload: err.message });
    });
};

// Проверка данных введенных в третьем этапе регистрации
export const checkThirdStage = (values) => (dispatch) => {
  dispatch({
    type: CHECK_THIRD_STAGE_START,
  });

  checkThirdStageApi(values)
    .then((ans) => {
      if (!!ans.data.status) {
        try {
          const error = JSON.parse(ans.data.message);
          dispatch(stopSubmit("regThirdStageForm", error));
          dispatch({ type: CHECK_THIRD_STAGE_FAILURE, payload: error });
        } catch (err) {
          dispatch(stopSubmit("regThirdStageForm", { _error: err.message }));
        }
      } else {
        dispatch({
          type: CHECK_THIRD_STAGE_SUCCESS,
          payload: values,
        });
        dispatch(setStage("3"));
      }
    })
    .catch((err) => {
      console.info(err);
      dispatch({
        type: CHECK_THIRD_STAGE_FAILURE,
        payload: err.message,
      });
    });
};

// Вернуться на первый шаг регистрации с востановлением данных
export const returnToFirstStage = () => (dispatch, getState) => {
  const firstStage = getState().auth.regData.firstStage;

  dispatch(setStage(0));
  dispatch(initialize("regFirstStageForm", { code: firstStage.split("") }));
};

// Вернуться на второй шаг регистрации с восстановлением данных
export const returnToSecondStage = () => (dispatch, getState) => {
  const secondStage = getState().auth.regData.secondStage;

  dispatch(setStage(1));
  dispatch(initialize("regSecondStageForm", { login: secondStage.login }));
};

// Вернуться на третий шаг регистрации с восстановлением данных
export const returnToThirdStage = () => (dispatch, getState) => {
  const thirdStage = getState().auth.regData.thirdStage;

  dispatch(setStage(2));
  dispatch(
    initialize("regThirdStageForm", {
      firstName: thirdStage.firstName,
      lastName: thirdStage.lastName,
      phone: thirdStage.phone,
      email: thirdStage.email,
    })
  );
};

// Установить шаг регистрации
export const setStage = (stage) => (dispatch) => {
  dispatch({
    type: SET_STAGE,
    payload: stage,
  });
};

// Регистрация нового администратора
export const regNewAdmin = (values) => (dispatch, getState) => {
  dispatch({
    type: REG_NEW_ADMIN_START,
  });

  const { regData } = getState().auth;

  // Собираем из стейта нового пользователя
  const newUser = {
    code: regData.firstStage,
    ...regData.secondStage,
    ...regData.thirdStage,
    ...values,
  };

  regNewAdminApi(newUser)
    .then((ans) => {
      // Если есть ошибка
      if (!!ans.data.status) {
        // Пытаемся преобразовать ее в объект
        try {
          const error = JSON.parse(ans.data.message);

          // Проверяем на наличие свойства stage. И если оно  есть
          // то возвращаемся к нужному шагу регистрации с восстановлением полей
          // и устанавливаем в нужное поле ошибку
          switch (error.stage) {
            case "firstStage":
              dispatch(returnToFirstStage());
              dispatch(touch("regFirstStageForm", Object.keys(error)[1]));
              dispatch(stopSubmit("regFirstStageForm", error));
              dispatch(focus("regFirstStageForm", Object.keys(error)[1]));
              break;
            case "secondStage":
              dispatch(returnToSecondStage());
              dispatch(touch("regSecondStageForm", Object.keys(error)[1]));
              dispatch(stopSubmit("regSecondStageForm", error));
              dispatch(focus("regSecondStageForm", Object.keys(error)[1]));
              break;
            case "thirdStage":
              dispatch(returnToThirdStage());
              dispatch(touch("regThirdStageForm", Object.keys(error)[1]));
              dispatch(stopSubmit("regThirdStageForm", error));
              dispatch(focus("regThirdStageForm", Object.keys(error)[1]));
              break;
            default:
              dispatch(stopSubmit("regFourthStageForm", error));
              return;
          }
          // Если преобразовать в объект не получается, то вываливаемся в общую ошибку
        } catch (err) {
          throw new Error(ans.data.message);
        }
      } else {
        dispatch({
          type: REG_NEW_ADMIN_SUCCESS,
        });
      }
    })
    .catch((err) => {
      console.info(err);
      dispatch(stopSubmit("regFourthStageForm", { _error: err.message }));
      dispatch({
        type: REG_NEW_ADMIN_FAILURE,
        payload: err.message,
      });
    });
};

// Очистить состояние регистрации при попадании на страницу входа
export const toggleReg = () => (dispatch) => {
  dispatch({
    type: TOGGLE_REG,
  });
};
