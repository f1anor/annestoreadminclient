import { change, initialize } from "redux-form";
import {
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
  PRELOAD_IMAGE_FAILURE,
  PRELOAD_IMAGE_START,
  PRELOAD_IMAGE_SUCCESS,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  ADD_SELECTED,
  CLEAR_SELECTED,
  CLEAR_SELECTED_ALL,
  DELETE_PRODUCTS_START,
  DELETE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAILURE,
  FETCH_EDIT_PRODUCT_START,
  FETCH_EDIT_PRODUCT_SUCCESS,
  FETCH_EDIT_PRODUCT_FAILURE,
  TOGGLE_ADDING_SUCCESS,
  MOVE_TO_ARCHIVE_START,
  MOVE_TO_ARCHIVE_FAILURE,
  MOVE_TO_ARCHIVE_SUCCESS,
  FETCH_ARCHIVE_PRODUCTS_START,
  FETCH_ARCHIVE_PRODUCTS_SUCCESS,
  FETCH_ARCHIVE_PRODUCTS_FAILURE,
  RESTORE_FROM_ARCHIVE_START,
  RESTORE_FROM_ARCHIVE_SUCCESS,
  RESTORE_FROM_ARCHIVE_FAILURE,
  SELECT_ALL,
  SELECT_ARCHIVE_ALL,
} from "../actionTypes";
import {
  preloadImageApi,
  addProductApi,
  editProductApi,
  fetchProductsApi,
  deleteProductsApi,
  fetchEditProductApi,
  moveToArchiveApi,
  restoreFromArchiveApi,
  fetchArchiveProductsApi,
} from "../api/product-api";

export const addProduct = (values) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_START,
  });

  addProductApi(values)
    .then((ans) => {
      if (!!ans.data.status) throw new Error(ans.data.message);
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: ans.data.product,
      });
    })
    .catch((err) => {
      dispatch({ type: ADD_PRODUCT_FAILURE, payload: err.message });
    });
};

export const editProduct = (values) => (dispatch) => {
  dispatch({
    type: EDIT_PRODUCT_START,
  });

  editProductApi(values)
    .then((ans) => {
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        payload: ans.data.product,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_PRODUCT_FAILURE,
        payload: err.message,
      });
    });
};

export const preloadImage = (img, name) => async (dispatch) => {
  dispatch({
    type: PRELOAD_IMAGE_START,
  });

  try {
    const ans = await preloadImageApi(img, name);

    dispatch(change("addProduct", name, { preloadedImg: ans.data.file }));
    dispatch({
      type: PRELOAD_IMAGE_SUCCESS,
      payload: ans.data.file,
    });
  } catch (err) {
    dispatch({
      type: PRELOAD_IMAGE_FAILURE,
      payload: err.message,
    });
  }
};

export const fetchProducts = (params) => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCTS_START,
  });

  try {
    const ans = await fetchProductsApi(params);

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: err.message,
    });
  }
};

export const addSelected = (id) => (dispatch) => {
  dispatch({ type: ADD_SELECTED, payload: id });
};

export const selectAll = () => (dispatch) => {
  dispatch({
    type: SELECT_ALL,
  });
};

export const selectArchiveAll = () => (dispatch) => {
  dispatch({
    type: SELECT_ARCHIVE_ALL,
  });
};

export const clearSelected = (id) => (dispatch) => {
  dispatch({ type: CLEAR_SELECTED, payload: id });
};

export const clearSelectedAll = () => (dispatch) => {
  dispatch({
    type: CLEAR_SELECTED_ALL,
  });
};

export const deleteProducts = (query, history) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: DELETE_PRODUCTS_START,
  });

  const product = getState().product;
  const { selected, currentProducts } = product;

  try {
    const ans = await deleteProductsApi(selected);
    console.log(11111111111, ans);
    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: DELETE_PRODUCTS_SUCCESS,
    });

    const page = +query.get("page");
    if (selected.length === currentProducts.length && page > 1) {
      query.set("page", page - 1);
      history.push(`${history.location.pathname}?${query}`);
    } else {
      dispatch(fetchArchiveProducts(query.toString()));
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: DELETE_PRODUCTS_FAILURE,
      payload: err.message,
    });
  }
};

export const fetchEditProduct = (article) => async (dispatch) => {
  dispatch({
    type: FETCH_EDIT_PRODUCT_START,
  });

  try {
    const ans = await fetchEditProductApi(article);
    const { product } = ans.data;
    dispatch({
      type: FETCH_EDIT_PRODUCT_SUCCESS,
      payload: ans.data.product,
    });

    dispatch(
      initialize("editProduct", {
        title: product.title,
        content: product.description,
        price: product.price,
        color: product.color,
        composition1title: product.composition.material1.title,
        composition1value: product.composition.material1.percent,
        composition2title: product.composition.material2.title,
        composition2value: product.composition.material2.percent,
        composition3title: product.composition.material3.title,
        composition3value: product.composition.material3.percent,
        composition4title: product.composition.material4.title,
        composition4value: product.composition.material4.percent,
        composition5title: product.composition.material5.title,
        composition5value: product.composition.material5.percent,
        size: product.size,
        gender: product.gender,
        category: product.category,
        img1: { preloadedImg: product.imgs.img1.large },
        img2: { preloadedImg: product.imgs.img2.large },
        img3: { preloadedImg: product.imgs.img3.large },
      })
    );
  } catch (err) {
    console.log(err);
    dispatch({
      type: FETCH_EDIT_PRODUCT_FAILURE,
      payload: err.message,
    });
  }
};

export const toggleAddingSuccess = () => (dispatch) => {
  dispatch({
    type: TOGGLE_ADDING_SUCCESS,
  });
};

export const moveToArchive = (query, history) => async (dispatch, getState) => {
  dispatch({
    type: MOVE_TO_ARCHIVE_START,
  });

  const product = getState().product;
  const { selected, currentProducts } = product;

  try {
    const ans = await moveToArchiveApi(selected);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: MOVE_TO_ARCHIVE_SUCCESS,
    });

    const page = +query.get("page");
    if (selected.length === currentProducts.length && page > 1) {
      query.set("page", page - 1);
      history.push(`${history.location.pathname}?${query}`);
    } else {
      dispatch(fetchProducts(query.toString()));
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: MOVE_TO_ARCHIVE_FAILURE,
      payload: err.message,
    });
  }
};

export const restoreFromArchive = (query, history) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: RESTORE_FROM_ARCHIVE_START,
  });

  const product = getState().product;
  const { selected, currentArchiveProducts } = product;

  try {
    const ans = await restoreFromArchiveApi(selected);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: RESTORE_FROM_ARCHIVE_SUCCESS,
    });

    const page = +query.get("page");
    if (selected.length === currentArchiveProducts.length && page > 1) {
      query.set("page", page - 1);
      history.push(`${history.location.pathname}?${query}`);
    } else {
      dispatch(fetchArchiveProducts(query.toString()));
    }
  } catch (err) {
    console.log(err);

    dispatch({
      type: RESTORE_FROM_ARCHIVE_FAILURE,
      payload: err.message,
    });
  }
};

export const fetchArchiveProducts = (query) => async (dispatch) => {
  dispatch({
    type: FETCH_ARCHIVE_PRODUCTS_START,
  });

  try {
    const ans = await fetchArchiveProductsApi(query);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_ARCHIVE_PRODUCTS_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: FETCH_ARCHIVE_PRODUCTS_FAILURE,
      payload: err.message,
    });
  }
};
