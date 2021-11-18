import { change, initialize, stopSubmit } from "redux-form";
import { getPageSize } from "selectors/app-selectors";
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
  MOVE_TO_ARCHIVE_START,
  MOVE_TO_ARCHIVE_FAILURE,
  MOVE_TO_ARCHIVE_SUCCESS,
  FETCH_ARCHIVE_PRODUCTS_START,
  FETCH_ARCHIVE_PRODUCTS_SUCCESS,
  FETCH_ARCHIVE_PRODUCTS_FAILURE,
  RESTORE_FROM_ARCHIVE_START,
  RESTORE_FROM_ARCHIVE_SUCCESS,
  RESTORE_FROM_ARCHIVE_FAILURE,
  SELECT_ALL_START,
  SELECT_ALL_SUCCESS,
  SELECT_ALL_FAILURE,
  SELECT_ARCHIVE_ALL,
  TOGGLE_STATUS_START,
  TOGGLE_STATUS_FAILURE,
  TOGGLE_STATUS_SUCCESS,
  CHECK_ARTICLE_START,
  SET_MODAL_PRODUCTS_ERROR,
  SET_MODAL_PRODUCT_PRICE_FILTER,
  SET_MODAL_ALL_PRODUCTS_TO_ARCHIVE,
  SET_MODAL_ARCHIVE_PRODUCTS_DELETE,
  SET_MODAL_ARCHIVE_PRODUCTS_RESTORE,
  MAKE_CUSTOM_ORDER_START,
  MAKE_CUSTOM_ORDER_SUCCESS,
  MAKE_CUSTOM_ORDER_FAILURE,
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
  toggleStatusApi,
  checkArticleApi,
  fetchAllProductsIds,
  checkNoActiveProductsApi,
} from "../api/product-api";

//Сформировать список артукулов для предзагрузки при автоматического добалении нового заказа
export const makeCustomOrder = (ids) => async (dispatch) => {
  dispatch({
    type: MAKE_CUSTOM_ORDER_START,
    payload: ids,
  });

  try {
    const ans = await checkNoActiveProductsApi(ids);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: MAKE_CUSTOM_ORDER_SUCCESS,
      payload: ids,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: MAKE_CUSTOM_ORDER_FAILURE,
      payload: err.message,
    });
  }
};

export const checkArticle = (values, history) => (dispatch) => {
  if (!values.article) return;

  dispatch({
    type: CHECK_ARTICLE_START,
  });

  checkArticleApi(values.article).then((ans) => {
    if (!!ans.data.status) {
      try {
        const error = JSON.parse(ans.data.message);
        dispatch(stopSubmit("findProduct", error));
      } catch (err) {
        dispatch(stopSubmit("findProduct", { _error: ans.data.message }));
      }
    } else {
      history.push(`/comments/${values.article}?page=1`);
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
      });
    }
  });
};

export const addProduct = (values) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_START,
  });

  addProductApi(values)
    .then((ans) => {
      if (!!ans.data.status) {
        try {
          const error = JSON.parse(ans.data.message);
          dispatch(stopSubmit("addProduct", error));
        } catch (err) {
          dispatch(stopSubmit("addProduct", { _error: ans.data.message }));
        }
      } else {
        dispatch({
          type: ADD_PRODUCT_SUCCESS,
          payload: ans.data.product,
        });
      }
    })
    .catch((err) => {
      dispatch({ type: ADD_PRODUCT_FAILURE, payload: err.message });
    });
};

export const editProduct = (values, id) => (dispatch) => {
  dispatch({
    type: EDIT_PRODUCT_START,
  });

  editProductApi(values, id)
    .then((ans) => {
      if (!!ans.data.status) {
        try {
          const error = JSON.parse(ans.data.message);
          dispatch(stopSubmit("editProduct", error));
        } catch (err) {
          dispatch(stopSubmit("editProduct", { _error: ans.data.message }));
        }
      } else {
        dispatch({
          type: EDIT_PRODUCT_SUCCESS,
          payload: ans.data.product,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: EDIT_PRODUCT_FAILURE,
        payload: err.message,
      });
    });
};

export const preloadImage = (files, form, name, value) => async (dispatch) => {
  console.log(files, form, name, value);
  dispatch({
    type: PRELOAD_IMAGE_START,
  });

  const arr = Array.from(files);

  const preloadImg = async (img, imgName) => {
    try {
      const ans = await preloadImageApi(img, imgName);

      dispatch({
        type: PRELOAD_IMAGE_SUCCESS,
        payload: ans.data.file,
      });

      return ans;
    } catch (err) {
      dispatch({
        type: PRELOAD_IMAGE_FAILURE,
        payload: err.message,
      });
    }
  };

  Promise.all(arr.map((file) => preloadImg(file, file.name))).then((ans) => {
    dispatch(
      change(form, name, [
        ...value,
        ...ans.map((file, index) => ({
          id: Date.now() + index,
          preloadImg: file.data.file,
          orientation: false,
          currentX: 0,
          currentY: 0,
          x: 0,
          y: 0,
          zoom: 1,
        })),
      ])
    );
  });
};

export const fetchEditProduct = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_EDIT_PRODUCT_START,
  });

  try {
    const ans = await fetchEditProductApi(id);

    if (!!ans.data.status) throw new Error(ans.data.message);

    const { product } = ans.data;

    dispatch(
      initialize("editProduct", {
        active: product.active,
        amount: product.amount,
        category: product.category,
        color: product.color,
        title: product.title,
        content: product.description ? JSON.parse(product.description) : "",
        gender: product.gender,
        size: product.size,
        imgs: product.imgs.map((item, index) => ({
          id: Date.now() + index,
          preloadImg: item.large,
          noedit: true,
          imgs: item,
        })),
        price: product.price,
        structure: product.structure.map((item, index) => ({
          id: index,
          name: item.name,
          value: item.value,
        })),
      })
    );

    dispatch({
      type: FETCH_EDIT_PRODUCT_SUCCESS,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_EDIT_PRODUCT_FAILURE,
      payload: err.message,
    });
  }
};

export const fetchProducts = (params) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_PRODUCTS_START,
  });

  const pageSize = getState().app.tableSize.size;

  try {
    const ans = await fetchProductsApi(params, pageSize);

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

export const selectAll = () => async (dispatch) => {
  dispatch({
    type: SELECT_ALL_START,
  });

  try {
    const ans = await fetchAllProductsIds();

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: SELECT_ALL_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: SELECT_ALL_FAILURE,
      payload: err.message,
    });
  }
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

export const deleteProducts =
  (ids, query, history) => async (dispatch, getState) => {
    dispatch({
      type: DELETE_PRODUCTS_START,
    });

    const product = getState().product;
    const { currentProducts } = product;

    dispatch(setModalArchiveProductsDelete(null));

    try {
      const ans = await deleteProductsApi(ids);

      if (!!ans.data.status) throw new Error(ans.data.message);

      dispatch({
        type: DELETE_PRODUCTS_SUCCESS,
      });

      const page = +query.get("page");
      if (ids.length === currentProducts.length && page > 1) {
        query.set("page", page - 1);
        history.push(`${history.location.pathname}?${query}`);
      } else {
        dispatch(fetchArchiveProducts(query.toString()));
      }
    } catch (err) {
      console.info(err);
      dispatch({
        type: DELETE_PRODUCTS_FAILURE,
        payload: err.message,
      });
    }
  };

// TODO: переделать
export const moveToArchive =
  (ids, query, history) => async (dispatch, getState) => {
    dispatch({
      type: MOVE_TO_ARCHIVE_START,
    });

    const product = getState().product;

    const { currentProducts } = product;

    try {
      const ans = await moveToArchiveApi(ids);

      if (!!ans.data.status) throw new Error(ans.data.message);

      dispatch({
        type: MOVE_TO_ARCHIVE_SUCCESS,
      });
      dispatch(setModalAllProductsToArchive(null));
      dispatch(clearSelectedAll());

      const page = +query.get("page");
      if (ids.length === currentProducts.length && page > 1) {
        query.set("page", page - 1);
        history.push(`${history.location.pathname}?${query}`);
      } else {
        dispatch(fetchProducts(query.toString()));
      }
    } catch (err) {
      console.info(err);
      dispatch(setModalAllProductsToArchive(null));
      setTimeout(() => {
        dispatch({
          type: MOVE_TO_ARCHIVE_FAILURE,
          payload: err.message,
        });
      }, 0.5);
    }
  };

export const restoreFromArchive =
  (ids, query, history) => async (dispatch, getState) => {
    dispatch({
      type: RESTORE_FROM_ARCHIVE_START,
    });

    const product = getState().product;
    const { currentArchiveProducts } = product;

    try {
      const ans = await restoreFromArchiveApi(ids);

      if (!!ans.data.status) throw new Error(ans.data.message);

      dispatch({
        type: RESTORE_FROM_ARCHIVE_SUCCESS,
      });
      dispatch(setModalArchiveProductsRestore(null));

      const page = +query.get("page");
      if (ids.length === currentArchiveProducts.length && page > 1) {
        query.set("page", page - 1);
        history.push(`${history.location.pathname}?${query}`);
      } else {
        dispatch(fetchArchiveProducts(query.toString()));
      }
    } catch (err) {
      console.info(err);

      dispatch({
        type: RESTORE_FROM_ARCHIVE_FAILURE,
        payload: err.message,
      });
    }
  };

export const fetchArchiveProducts = (params) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_ARCHIVE_PRODUCTS_START,
  });

  const pageSize = getState().app.tableSize.size + 1;

  try {
    const ans = await fetchArchiveProductsApi(params, pageSize);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_ARCHIVE_PRODUCTS_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_ARCHIVE_PRODUCTS_FAILURE,
      payload: err.message,
    });
  }
};

export const toggleStatus =
  (id, status, query) => async (dispatch, getState) => {
    dispatch({
      type: TOGGLE_STATUS_START,
    });

    try {
      const ans = await toggleStatusApi(id, status);

      if (!!ans.data.status) throw new Error(ans.data.message);

      dispatch({
        type: TOGGLE_STATUS_SUCCESS,
      });

      // TODO: Проверить
      const pageSize = getPageSize(getState());
      dispatch(fetchProducts(query, pageSize));
    } catch (err) {
      console.info(err.message);
      dispatch({
        type: TOGGLE_STATUS_FAILURE,
        payload: err.message,
      });
    }
  };

//Управление модальным окном ошибок
export const setModalProductsError = () => (dispatch) => {
  dispatch({
    type: SET_MODAL_PRODUCTS_ERROR,
  });
};

//Управление модальным окном фильтра цены
export const setModalProductPriceFilter = (value) => (dispatch) => {
  dispatch({
    type: SET_MODAL_PRODUCT_PRICE_FILTER,
    payload: value,
  });
};

//Управление модальным окном переноса продуктов в архив
export const setModalAllProductsToArchive = (id) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ALL_PRODUCTS_TO_ARCHIVE,
    payload: id,
  });
};

//Управление модальным окном удаления продуктов
export const setModalArchiveProductsDelete = (id) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ARCHIVE_PRODUCTS_DELETE,
    payload: id,
  });
};

//Управление модальным окном восстановления продуктов из архива
export const setModalArchiveProductsRestore = (id) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ARCHIVE_PRODUCTS_RESTORE,
    payload: id,
  });
};
