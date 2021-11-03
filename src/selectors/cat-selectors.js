import { createSelector } from "reselect";

export const getCat = (state) => {
  return state.category.cat;
};

export const getCatForFrom = createSelector(getCat, (cat) => {
  const arr = cat.map((item) => {
    const obj = {};
    obj.title = item.title;
    obj.value = item.title;
    return obj;
  });
  return arr;
});

export const getIsCatFetching = (state) => {
  return state.category.isFetching;
};

export const getIsAdding = (state) => {
  return state.category.isAdding;
};

export const getIsDeleting = (state) => {
  return state.category.isDeleting;
};

export const getIsMovingDown = (state) => {
  return state.category.isMovingDown;
};

export const getIsMovingUp = (state) => {
  return state.category.isMovingUp;
};

export const getIsBisy = createSelector(
  getIsMovingUp,
  getIsMovingDown,
  getIsDeleting,
  getIsAdding,
  getIsCatFetching,
  (isMovingUp, isMovingDown, isDeleting, isAdding, isFetching) => {
    return isMovingUp || isMovingDown || isDeleting || isAdding || isFetching;
  }
);

export const getActiveCat = createSelector(getCat, (cat) => {
  return cat.filter((item) => +item.count > 0);
});

export const getPassiveCat = createSelector(getCat, (cat) => {
  return cat.filter((item) => +item.count === 0);
});

export const getModalEdit = (state) => {
  return state.category.modalEdit;
};

export const getModalNew = (state) => {
  return state.category.modalNew;
};

export const getModalDelete = (state) => {
  return state.category.modalDelete;
};
