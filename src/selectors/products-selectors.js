import { createSelector } from "reselect";

const getProducts = (state) => {
  return state.product.products;
};

const getProductsOnPage = (state) => {
  return state.product.currentProducts;
};

export const getIsFetching = (state) => {
  return state.product.isFetching;
};

export const getIsArchiveFetching = (state) => {
  return state.product.isArchiveFetching;
};

export const getIsDeleting = (state) => {
  return state.product.isDeleting;
};

export const getIsMovingToArchive = (state) => {
  return state.product.isMovingToArchive;
};

export const getIsRestoring = (state) => {
  return state.product.isRestoring;
};

export const getProductsById = createSelector(
  getProducts,
  getProductsOnPage,
  (products, currentProducts) => {
    if (!currentProducts) return;
    return currentProducts.map((product) => {
      return products[product];
    });
  }
);

export const getProdDisabled = createSelector(
  getIsDeleting,
  getIsFetching,
  getIsArchiveFetching,
  getIsRestoring,
  getIsMovingToArchive,
  (
    isDeleting,
    isFetching,
    isArchiveFetching,
    isRestoring,
    isMovingToArchive
  ) => {
    return (
      isDeleting ||
      isFetching ||
      isArchiveFetching ||
      isRestoring ||
      isMovingToArchive
    );
  }
);

export const getArchiveProducts = (state) => {
  return state.product.archiveProducts;
};

export const getCurretArchiveProducts = (state) => {
  return state.product.currentArchiveProducts;
};

export const getArchiveProductsById = createSelector(
  getArchiveProducts,
  getCurretArchiveProducts,
  (archiveProducts, currentArchiveProducts) => {
    if (!currentArchiveProducts) return;
    return currentArchiveProducts.map((product) => {
      return archiveProducts[product];
    });
  }
);

export const getSelected = (state) => {
  return state.product.selected;
};

export const getIsArchiveSelectedAll = createSelector(
  getCurretArchiveProducts,
  getSelected,
  (currentArchiveProducts, selected) => {
    return (
      currentArchiveProducts.length === selected.length && selected.length !== 0
    );
  }
);
