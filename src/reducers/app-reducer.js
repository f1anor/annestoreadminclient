import {
  ADD_TOAST_MESSAGE,
  INIT_APP,
  REMOVE_TOAST_MESSAGE,
  SET_IMG,
  SET_TABLE_SIZE,
  SET_TOOLTIP,
} from "../actionTypes";

const initialState = {
  init: null,
  messages: [],
  img: null,
  tableSize: {
    window: null,
    size: 10,
  },
  tooltip: {
    text: "",
    target: null,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_APP:
      return {
        ...state,
        init: true,
      };
    case SET_TABLE_SIZE:
      return {
        ...state,
        tableSize: {
          window: payload.window,
          size: payload.size,
        },
      };
    case ADD_TOAST_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Date.now(),
            content: payload.text,
            variant: payload.variant,
          },
        ],
      };
    case REMOVE_TOAST_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((mess) => mess.id !== payload),
      };
    case SET_IMG:
      return {
        ...state,
        img: payload,
      };
    case SET_TOOLTIP:
      return {
        ...state,
        tooltip: {
          text: payload.text,
          target: payload.target,
        },
      };
    default:
      return state;
  }
};
