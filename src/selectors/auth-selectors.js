export const getAva = (state) => {
  return state.auth.ava;
};

export const getName = (state) => {
  return state.auth.name;
};

export const getCurrentStage = (state) => {
  return state.auth.regData.stage;
};

export const getIsRegBisy = (state) => {
  return state.auth.isRegBisy;
};

export const isReg = (state) => {
  return state.auth.isReg;
};
