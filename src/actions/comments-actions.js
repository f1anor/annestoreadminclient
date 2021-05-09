import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT_START,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_SUCCESS,
  APPLY_COMMENT_START,
  APPLY_COMMENT_FAILURE,
  APPLY_COMMENT_SUCCESS,
  REMOVE_COMMENT_START,
  REMOVE_COMMENT_FAILURE,
  REMOVE_COMMENT_SUCCESS,
  SET_COMMENT_ANSWER,
  ADD_ANS_START,
  ADD_ANS_SUCCESS,
  ADD_ANS_FAILURE,
  REMOVE_COMMENT_ANS_START,
  REMOVE_COMMENT_ANS_SUCCESS,
  REMOVE_COMMENT_ANS_FAILURE,
} from "actionTypes";
import {
  fetchCommentsApi,
  addCommentApi,
  applyCommentApi,
  removeCommentApi,
  removeCommentAnsApi,
  addAnsApi,
} from "api/comments-api";
import { initialize, stopSubmit } from "redux-form";

export const fetchComments = (id, query) => async (dispatch) => {
  dispatch({
    type: FETCH_COMMENTS_START,
  });

  try {
    const ans = await fetchCommentsApi(id, query);
    if (!!ans.data.status) throw new Error(ans.data.message);
    dispatch({
      type: FETCH_COMMENTS_SUCCESS,
      payload: ans.data.data,
    });
    dispatch(setAns(""));
    dispatch(setEditAns(""));
  } catch (err) {
    console.log(err);
    dispatch({
      type: FETCH_COMMENTS_FAILURE,
      payload: err.message,
    });
  }
};

export const addComment = (id, values) => async (dispatch) => {
  dispatch({
    type: ADD_COMMENT_START,
  });

  try {
    if (!id) throw new Error("Не найден артикул продукта");
    const ans = await addCommentApi(id, values);
    if (!!ans.data.status) throw new Error(ans.data.message);
    dispatch({
      type: ADD_COMMENT_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_COMMENT_FAILURE,
      payload: err.message,
    });
  }
};

export const applyComment = (id, productId, query) => async (dispach) => {
  dispach({
    type: APPLY_COMMENT_START,
  });

  try {
    const ans = await applyCommentApi(id);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispach({
      type: APPLY_COMMENT_SUCCESS,
    });

    dispach(fetchComments(productId, query));
  } catch (err) {
    console.log(err);
    dispach({
      type: APPLY_COMMENT_FAILURE,
      payload: err.message,
    });
  }
};

export const removeComment = (id, productId, query) => async (dispach) => {
  dispach({
    type: REMOVE_COMMENT_START,
  });

  try {
    const ans = await removeCommentApi(id);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispach({
      type: REMOVE_COMMENT_SUCCESS,
    });
    dispach(fetchComments(productId, query));
  } catch (err) {
    console.log(err);
    dispach({
      type: REMOVE_COMMENT_FAILURE,
      payload: err.message,
    });
  }
};

export const removeCommentAns = (id, productId, query) => async (dispatch) => {
  dispatch({
    type: REMOVE_COMMENT_ANS_START,
  });

  try {
    const ans = await removeCommentAnsApi(id);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: REMOVE_COMMENT_ANS_SUCCESS,
    });

    dispatch(fetchComments(productId, query));
  } catch (err) {
    console.log(err);
    dispatch({
      type: REMOVE_COMMENT_ANS_FAILURE,
      payload: err.message,
    });
  }
};

export const setAns = (id) => (dispach) => {
  dispach({ type: SET_COMMENT_ANSWER, payload: id });
};

export const setEditAns = (id, content) => (dispatch) => {
  dispatch({ type: SET_COMMENT_ANSWER, payload: id });
  dispatch(initialize("commentAnswerForm", { content: content }));
};

export const addAns = (id, values, productId, query) => (dispatch) => {
  dispatch({
    type: ADD_ANS_START,
  });

  addAnsApi(id, values)
    .then((ans) => {
      if (!!ans.data.status) {
        try {
          const error = JSON.parse(ans.data.message);
          dispatch(stopSubmit("commentAnswerForm", error));
        } catch (err) {
          dispatch(
            stopSubmit("commentAnswerForm", { _error: ans.data.message })
          );
        }
      } else {
        dispatch({
          type: ADD_ANS_SUCCESS,
        });
        dispatch(fetchComments(productId, query));
      }
    })
    .catch((err) => {
      dispatch({ type: ADD_ANS_FAILURE, payload: err.message });
    });
};
