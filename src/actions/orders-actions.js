import { arrayPush, change, initialize, stopSubmit, touch } from "redux-form";
import {
  ADD_ORDER_FAILURE,
  ADD_ORDER_PRODUCT_FAILURE,
  ADD_ORDER_PRODUCT_START,
  ADD_ORDER_START,
  ADD_ORDER_SUCCESS,
  CHANGE_STATUS_FAILURE,
  CHANGE_STATUS_START,
  CHANGE_STATUS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  CLEAR_NOTE,
  SET_NOTE,
  SET_IMG,
  FETCH_EDIT_ORDER_START,
  FETCH_EDIT_ORDER_FAILURE,
  FETCH_EDIT_ORDER_SUCCESS,
  EDIT_ORDER_START,
  EDIT_ORDER_SUCCESS,
  EDIT_ORDER_FAILURE,
  TOGGLE_EDITING_SUCCESS,
  SET_LAST_PARAMS,
  SET_MODAL_ADD_PRODUCT,
  ADD_ORDER_PRODUCT_SUCCESS,
  ADD_ORDER_MANAGER_NOTE,
  GET_DELIVERY_PRICE_START,
  GET_DELIVERY_PRICE_SUCCESS,
  GET_DELIVERY_PRICE_FAILURE,
  SET_MODAL_ADD_MANAGER_NOTE,
} from "../actionTypes";
import {
  addOrderProductApi,
  addOrderApi,
  fetchOrdersApi,
  changeStatusApi,
  fetchEditOrderApi,
  editOrderApi,
  checkDeliveryPriceApi,
} from "../api/orders-api";

export const fetchOrders = (type, query, pageSize) => async (dispatch) => {
  dispatch({
    type: FETCH_ORDERS_START,
  });

  try {
    const ans = await fetchOrdersApi(type, query, pageSize);

    if (!!ans.data.status) throw new Error(ans.data.message);
    dispatch({
      type: FETCH_ORDERS_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: FETCH_ORDERS_FAILURE,
      payload: err.message,
    });
  }
};

export const addOrderNote = (form, values) => (dispatch, getState) => {
  const email = getState().auth.email;
  const val = values || {};
  dispatch({ type: ADD_ORDER_MANAGER_NOTE });
  dispatch(
    arrayPush(form, "managerNotes", {
      ...val,
      date: Date.now(),
      owner: !val.visible ? email : null,
    })
  );
  dispatch(setModalAddManagerNote(null));
};

export const addOrderProduct = (art, form, values) => (dispatch) => {
  const val = values || [];

  dispatch({
    type: ADD_ORDER_PRODUCT_START,
  });

  addOrderProductApi(art)
    .then((ans) => {
      if (!!ans.data.status) {
        try {
          const error = JSON.parse(ans.data.message);
          dispatch(stopSubmit("ordAddProdForm", error));
          dispatch({ type: ADD_ORDER_PRODUCT_FAILURE, payload: error });
        } catch (err) {
          dispatch(stopSubmit("ordAddProdForm", { _error: ans.data.message }));
          dispatch({ type: ADD_ORDER_PRODUCT_FAILURE, payload: err.message });
        }
      } else {
        const { product } = ans.data;
        const exist = val.filter((item) => item.id === product._id);
        if (exist.length > 0) {
          console.log(123123);
          dispatch(
            stopSubmit("ordAddProdForm", { name: "Продукт уже в списке" })
          );
          return;
        }

        dispatch(
          arrayPush(form, "products", {
            id: product._id,
            title: product.title,
            article: product.article,
            amount: 1,
            imgs: product.imgs,
            price: product.price,
          })
        );

        dispatch({
          type: ADD_ORDER_PRODUCT_SUCCESS,
        });
        dispatch(setModalAddProduct(null));
      }
    })
    .catch((err) => {
      dispatch({
        type: ADD_ORDER_PRODUCT_FAILURE,
        payload: err.message,
      });
    });
};

export const addOrder = (values) => (dispatch) => {
  if (!values) return;

  dispatch({
    type: ADD_ORDER_START,
  });

  addOrderApi(values)
    .then((ans) => {
      if (!!ans.data.status) throw new Error(ans.data.message);
      dispatch({
        type: ADD_ORDER_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ADD_ORDER_FAILURE,
        payload: err.message,
      });
    });
};

export const editOrder = (id, values) => (dispatch) => {
  if (!values) return;
  dispatch({
    type: EDIT_ORDER_START,
  });

  editOrderApi(id, values)
    .then((ans) => {
      if (!!ans.data.status) throw new Error(ans.data.message);
      dispatch({
        type: EDIT_ORDER_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: EDIT_ORDER_FAILURE,
        payload: err.message,
      });
    });
};

export const toggleEditingSuccess = () => (dispatch) => {
  dispatch({
    type: TOGGLE_EDITING_SUCCESS,
  });
};

export const changeStatus = (id, status, query) => async (dispatch) => {
  dispatch({
    type: CHANGE_STATUS_START,
  });

  try {
    const ans = await changeStatusApi(id, status);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: CHANGE_STATUS_SUCCESS,
    });

    dispatch(fetchOrders(query));
  } catch (err) {
    dispatch({
      type: CHANGE_STATUS_FAILURE,
      payload: err.message,
    });
  }
};

export const clearNote = () => (dispatch) => {
  dispatch({
    type: CLEAR_NOTE,
  });
};

export const setNote = (content) => (dispatch) => {
  dispatch({
    type: SET_NOTE,
    payload: content,
  });
};

export const setImg = (img) => (dispatch) => {
  dispatch({
    type: SET_IMG,
    payload: img,
  });
};

export const fetchEditOrder = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_EDIT_ORDER_START,
  });

  try {
    const ans = await fetchEditOrderApi(id);
    if (!!ans.data.status) throw new Error(ans.data.message);

    const { order } = ans.data;

    dispatch({
      type: FETCH_EDIT_ORDER_SUCCESS,
      payload: order,
    });

    dispatch(
      initialize("editOrder", {
        firstName: order.firstName,
        lastName: order.lastName,
        phone: order.phone,
        email: order.email,
        managerNotes: { notes: order.managerNotes },
        userNotes: { notes: order.userNotes },
        products: {
          products: order.products,
          inProgress: null,
          success: null,
          message: null,
        },
      })
    );
  } catch (err) {
    console.log(err);
    dispatch({
      type: FETCH_EDIT_ORDER_FAILURE,
      payload: err.message,
    });
  }
};

export const setLastParams = (query) => (dispatch) => {
  dispatch({
    type: SET_LAST_PARAMS,
    payload: query,
  });
};

export const setModalAddProduct = (form) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ADD_PRODUCT,
    payload: form,
  });
};

export const setModalAddManagerNote = (form) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ADD_MANAGER_NOTE,
    payload: form,
  });
};

export const checkDeliveryPrice = (form, index = 299804, weight = 500) => (
  dispatch
) => {
  dispatch({
    type: GET_DELIVERY_PRICE_START,
  });

  dispatch(touch(form, "deliveryPrice"));
  dispatch(change(form, "deliveryPrice", ""));

  checkDeliveryPriceApi(index, weight)
    .then((ans) => {
      if (!ans.paynds) {
        dispatch(
          stopSubmit(form, {
            deliveryPrice: "Не удалось рассчитать стоимость доставки",
          })
        );
        throw new Error("Не удалось рассчитать стоимость доставки");
      } else {
        dispatch(change(form, "deliveryPrice", +ans.paynds / 100));
        dispatch({
          type: GET_DELIVERY_PRICE_SUCCESS,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_DELIVERY_PRICE_FAILURE,
        payload: err.message,
      });
    });
};
