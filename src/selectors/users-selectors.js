import { createSelector } from "reselect";

export const getAllAdmins = (state) => {
  return state.users.admins;
};

export const getCurrentAdmins = (state) => {
  return state.users.currentAdmins;
};

export const getIsFetching = (state) => {
  return state.users.isFetching;
};

export const getIsTogglingAccess = (state) => {
  return state.users.isTogglingAccess;
};

export const getAdmins = createSelector(
  getAllAdmins,
  getCurrentAdmins,
  (allAdmins, currentAdmins) => {
    if (!currentAdmins) return;
    return currentAdmins.map((admin) => allAdmins[admin]);
  }
);

export const getUsersDisabled = createSelector(
  getIsFetching,
  getIsTogglingAccess,
  (isFetching, isTogglingAccess) => {
    return isFetching || isTogglingAccess;
  }
);
