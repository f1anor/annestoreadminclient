import {
  REG_NEW_ADMIN_SUCCESS,
  RESTORE_SUCCESS,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from "../actionTypes";

const initialState = {
  regSuccess: null,
  logSuccess: null,
  auth: null,
  email: null,
  name: null,
  ava: null,
  root: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REG_NEW_ADMIN_SUCCESS:
      return {
        ...state,
        regSuccess: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        logSuccess: true,
      };
    case RESTORE_SUCCESS:
      return {
        ...state,
        auth: true,
        name: `${payload.firstName} ${payload.lastName}`,
        email: payload.email,
        ava: payload.ava.small,
        root: payload.root,
      };
    case SIGN_OUT:
      return {
        ...state,
        auth: null,
        name: null,
        email: null,
      };
    default:
      return state;
  }
};
