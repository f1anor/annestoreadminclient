import {
  ADD_CAT_FAILURE,
  ADD_CAT_START,
  ADD_CAT_SUCCESS,
  CLEAR_SELECT_CAT,
  FETCH_CAT_FAILURE,
  FETCH_CAT_START,
  FETCH_CAT_SUCCESS,
  MOVE_DOWN_CAT_FAILURE,
  MOVE_DOWN_CAT_START,
  MOVE_DOWN_CAT_SUCCESS,
  MOVE_UP_CAT_FAILURE,
  MOVE_UP_CAT_START,
  MOVE_UP_CAT_SUCCESS,
  REMOVE_CAT_FAILURE,
  REMOVE_CAT_START,
  REMOVE_CAT_SUCCESS,
  SELECT_CAT,
  SET_MODAL_EDIT,
  SET_MODAL_NEW,
  SET_MODAL_DELETE,
} from "../actionTypes";

const initialState = {
  cat: [],
  selected: null,
  isMovingUp: null,
  isMovingDown: null,
  isFetching: null,
  isDeleting: null,
  isAdding: null,
  message: "",
  modalEdit: null,
  modalNew: null,
  modalDelete: null,
};

export const catReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CAT_START:
      return {
        ...state,
        isFetching: true,
        message: "",
      };
    case FETCH_CAT_SUCCESS:
      return {
        ...state,
        cat: Array.from(payload),
        isFetching: null,
      };
    case FETCH_CAT_FAILURE:
      return {
        ...state,
        isFetching: null,
      };
    case ADD_CAT_START:
      return {
        ...state,
        isAdding: true,
        message: "",
      };
    case ADD_CAT_SUCCESS:
      return {
        ...state,
        isAdding: null,
      };
    case ADD_CAT_FAILURE:
      return {
        ...state,
        isAdding: null,
        message: payload,
      };
    case SELECT_CAT:
      return {
        ...state,
        selected: payload,
      };
    case CLEAR_SELECT_CAT:
      return {
        ...state,
        selected: null,
      };
    case MOVE_UP_CAT_START:
      return {
        ...state,
        isMovingUp: true,
        message: "",
      };
    case MOVE_UP_CAT_SUCCESS:
      return {
        ...state,
        isMovingUp: null,
      };
    case MOVE_UP_CAT_FAILURE:
      return {
        ...state,
        isMovingUp: null,
        message: payload,
      };
    case MOVE_DOWN_CAT_START:
      return {
        ...state,
        isMovingDown: true,
        message: "",
      };
    case MOVE_DOWN_CAT_SUCCESS:
      return {
        ...state,
        isMovingDown: null,
      };
    case MOVE_DOWN_CAT_FAILURE:
      return {
        ...state,
        isMovingDown: null,
        message: payload,
      };
    case REMOVE_CAT_START:
      return {
        ...state,
        isDeleting: true,
        message: "",
      };
    case REMOVE_CAT_SUCCESS:
      return {
        ...state,
        isDeleting: null,
      };
    case REMOVE_CAT_FAILURE:
      return {
        ...state,
        isDeleting: null,
        message: payload,
      };
    case SET_MODAL_EDIT:
      return {
        ...state,
        modalEdit: payload,
      };
    case SET_MODAL_NEW:
      return {
        ...state,
        modalNew: payload,
      };
    case SET_MODAL_DELETE:
      return {
        ...state,
        modalDelete: payload,
      };
    default:
      return state;
  }
};
