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

export const getSelected = (state) => {
  return state.category.selected;
};

export const getIsFetching = (state) => {
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

export const getCatDisabled = createSelector(
  getIsMovingUp,
  getIsMovingDown,
  getIsDeleting,
  getIsAdding,
  getIsFetching,
  (isMovingUp, isMovingDown, isDeleting, isAdding, isFetching) => {
    return isMovingUp || isMovingDown || isDeleting || isAdding || isFetching;
  }
);

export const getSelectedTitle = createSelector(
  getCat,
  getSelected,
  (cat, selected) => {
    const selectedCat = cat.filter((item) => item._id === selected);
    return selectedCat.length ? selectedCat[0].title : null;
  }
);

export const getSelectedNumber = createSelector(
  getCat,
  getSelected,
  (cat, selected) => {
    const selectedCat = cat.filter((item) => item._id === selected);
    return selectedCat.length ? selectedCat[0].number : null;
  }
);

export const getSelectedCount = createSelector(
  getCat,
  getSelected,
  (cat, selected) => {
    const selectedCat = cat.filter((item) => item._id === selected);
    return selectedCat.length ? selectedCat[0].count : null;
  }
);
