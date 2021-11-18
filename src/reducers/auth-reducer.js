import {
  REG_NEW_ADMIN_SUCCESS,
  RESTORE_SUCCESS,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  CHECK_FIRST_STAGE_START,
  CHECK_FIRST_STAGE_SUCCESS,
  CHECK_FIRST_STAGE_FAILURE,
  CHECK_SECOND_STAGE_SUCCESS,
  CHECK_THIRD_STAGE_SUCCESS,
  SET_STAGE,
  CHECK_SECOND_STAGE_START,
  CHECK_SECOND_STAGE_FAILURE,
  CHECK_THIRD_STAGE_START,
  CHECK_THIRD_STAGE_FAILURE,
  REG_NEW_ADMIN_START,
  REG_NEW_ADMIN_FAILURE,
  TOGGLE_REG,
} from "../actionTypes";

const initialState = {
  regSuccess: null,
  logSuccess: null,
  auth: null,
  email: null,
  name: null,
  ava: null,
  root: false,
  regData: {
    stage: 0,
    firstStage: "",
    secondStage: {
      login: "",
      password: "",
    },
    thirdStage: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    fourthStage: {
      tmpAva: "",
    },
  },

  // Состояния
  isRegBisy: null,
  isReg: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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

    // Устанавливаем в стейт данные первого этапа регистрации
    case CHECK_FIRST_STAGE_START:
      return {
        ...state,
        isRegBisy: true,
      };
    case CHECK_FIRST_STAGE_SUCCESS:
      return {
        ...state,
        isRegBisy: false,
        regData: {
          ...state.regData,
          firstStage: payload,
        },
      };
    case CHECK_FIRST_STAGE_FAILURE:
      return {
        ...state,
        isRegBisy: false,
      };

    // Устанавливаем в стейт данные второго этапа регистрации
    case CHECK_SECOND_STAGE_START:
      return {
        ...state,
        isRegBisy: true,
      };
    case CHECK_SECOND_STAGE_SUCCESS:
      return {
        ...state,
        isRegBisy: null,
        regData: {
          ...state.regData,
          secondStage: payload,
        },
      };
    case CHECK_SECOND_STAGE_FAILURE:
      return {
        ...state,
        isRegBisy: null,
      };

    // Устанавливаем в стейт данные третьего этапа регистрации
    case CHECK_THIRD_STAGE_START:
      return {
        ...state,
        isRegBisy: true,
      };
    case CHECK_THIRD_STAGE_SUCCESS:
      return {
        ...state,
        isRegBisy: null,
        regData: {
          ...state.regData,
          thirdStage: payload,
        },
      };
    case CHECK_THIRD_STAGE_FAILURE:
      return {
        ...state,
        isRegBisy: null,
      };

    // Устанавливаем текущий этап регистрации
    case SET_STAGE:
      return {
        ...state,
        regData: {
          ...state.regData,
          stage: payload,
        },
      };

    // Регистрация
    case REG_NEW_ADMIN_START:
      return {
        ...state,
        isReg: true,
      };
    case REG_NEW_ADMIN_SUCCESS:
      return {
        ...state,
        regSuccess: true,
        isReg: null,
      };
    case REG_NEW_ADMIN_FAILURE:
      return {
        ...state,
        isReg: null,
      };

    // Сбросить состояние регистрации
    case TOGGLE_REG:
      return {
        ...state,
        regSuccess: null,
        regData: {
          stage: 0,
          firstStage: "",
          secondStage: {
            login: "",
            password: "",
          },
          thirdStage: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
          },
          fourthStage: {
            tmpAva: "",
          },
        },

        isRegBisy: null,
        isReg: null,
      };
    default:
      return state;
  }
};
