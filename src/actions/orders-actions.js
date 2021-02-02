import { change, initialize } from "redux-form";
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
} from "../actionTypes";
import {
  addOrderProductApi,
  addOrderApi,
  fetchOrdersApi,
  changeStatusApi,
  fetchEditOrderApi,
  editOrderApi,
} from "../api/orders-api";

export const addOrderProduct = (art, value, form) => (dispatch) => {
  const val = value || { products: [] };
  dispatch({
    type: ADD_ORDER_PRODUCT_START,
  });

  dispatch(
    change(form, "products", {
      ...val,
      inProgress: true,
      success: null,
      message: null,
    })
  );

  addOrderProductApi(art)
    .then((ans) => {
      if (!!ans.data.status) throw new Error(ans.data.message);

      const { product } = ans.data;

      if (!product) {
        dispatch(
          change(form, "products", { ...val, message: "Продукт не найден" })
        );
        return;
      }

      const exist = val.products.filter((item) => item.id === product._id);

      if (exist.length > 0) {
        dispatch(
          change(form, "products", {
            ...val,
            message: "Этот продукт уже в списке",
          })
        );
        return;
      }

      dispatch(
        change(form, "products", {
          ...val,
          products: [
            ...val.products,
            {
              id: product._id,
              title: product.title,
              article: product.article,
              amount: 1,
              imgs: product.imgs,
              price: product.price,
            },
          ],
          inProgress: null,
          success: true,
          message: null,
        })
      );
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

export const fetchOrders = (query) => async (dispatch) => {
  dispatch({
    type: FETCH_ORDERS_START,
  });

  try {
    const ans = await fetchOrdersApi(query);

    if (!!ans.data.status) throw new Error(ans.data.message);
    console.log(ans);
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
    console.log(order);
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
