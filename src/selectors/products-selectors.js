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

export const getIsSelectingAll = (state) => {
  return state.product.isSelecting;
};

export const getIsProductAddingSuccess = (state) => {
  return state.product.isAddingSuccess;
};

export const getIsProductEditingSuccess = (state) => {
  return state.product.isEditingSuccess;
};

export const getIsCustomOrderMaking = (state) => {
  return state.product.isCustomOrderMaking;
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
  getIsSelectingAll,
  getIsCustomOrderMaking,
  (
    isDeleting,
    isFetching,
    isArchiveFetching,
    isRestoring,
    isMovingToArchive,
    isSelecting,
    isCustomOrderMaking
  ) => {
    return (
      isDeleting ||
      isFetching ||
      isArchiveFetching ||
      isRestoring ||
      isMovingToArchive ||
      isSelecting ||
      isCustomOrderMaking
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

// Продукты приготовленные для заказа
export const getProductsToOrder = (state) => {
  return state.product.productsToOrder;
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

export const getTotalCount = (state) => {
  return state.product.totalCount;
};

export const getIsProductsSelectedAll = createSelector(
  getTotalCount,
  getSelected,
  (totalCount, selected) => {
    return totalCount === selected.length && selected.length !== 0;
  }
);

export const getArchiveTotalCount = (state) => {
  return state.product.archiveTotalCount;
};

export const getMessage = (state) => {
  return state.product.message;
};

export const getProductImg = (state) => {
  return state.product.img;
};

// Состояния модальных окон
export const getModalProductPriceFilter = (state) => {
  return state.product.modalProductPriceFilter;
};

export const getModalAllProductsToArchive = (state) => {
  return state.product.modalAllProductsToArchive;
};

export const getModalArchiveProductsDelete = (state) => {
  return state.product.modalArchiveProductsDelete;
};

export const getModalArchiveProductsRestore = (state) => {
  return state.product.modalArchiveProductsRestore;
};
