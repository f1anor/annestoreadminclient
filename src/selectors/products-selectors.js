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

export const getIsDeleting = (state) => {
  return state.product.isDeleting;
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
  (isDeleting, isFetching) => {
    return isDeleting || isFetching;
  }
);
