import {
  arrayPush,
  change,
  initialize,
  stopSubmit,
  touch,
  clearFields,
} from "redux-form";
import {
  ADD_ORDER_FAILURE,
  ADD_ORDER_PRODUCT_FAILURE,
  ADD_ORDER_PRODUCT_START,
  ADD_ORDER_START,
  ADD_ORDER_SUCCESS,
  FETCH_ORDER_START,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  REMOVE_ORDER_START,
  REMOVE_ORDER_SUCCESS,
  REMOVE_ORDER_FAILURE,
  CHANGE_STATUS_FAILURE,
  CHANGE_STATUS_START,
  CHANGE_STATUS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_LAST_ORDERS_START,
  FETCH_LAST_ORDERS_SUCCESS,
  FETCH_LAST_ORDERS_FAILURE,
  SET_IMG,
  FETCH_ORDER_NOTES_START,
  FETCH_ORDER_NOTES_SUCCESS,
  FETCH_ORDER_NOTES_FAILURE,
  FETCH_EDIT_ORDER_START,
  FETCH_EDIT_ORDER_FAILURE,
  FETCH_EDIT_ORDER_SUCCESS,
  EDIT_ORDER_START,
  EDIT_ORDER_SUCCESS,
  EDIT_ORDER_FAILURE,
  SET_MODAL_ADD_PRODUCT,
  ADD_ORDER_PRODUCT_SUCCESS,
  ADD_ORDER_MANAGER_NOTE,
  GET_DELIVERY_PRICE_START,
  GET_DELIVERY_PRICE_SUCCESS,
  GET_DELIVERY_PRICE_FAILURE,
  SET_MODAL_ADD_MANAGER_NOTE,
  SET_MODAL_PRICE_FILTER,
  SET_MODAL_ORDER_DELETE,
  SET_MODAL_ORDER_PREVIEW,
  SET_MODAL_ORDER_MANAGER_NOTES,
  SET_MODAL_ORDER_ERROR,
  ADD_MANAGER_NOTE_START,
  ADD_MANAGER_NOTE_FAILURE,
  ADD_MANAGER_NOTE_SUCCESS,
  REMOVE_NOTE_FROM_ORDER_START,
  REMOVE_NOTE_FROM_ORDER_FAILURE,
  REMOVE_NOTE_FROM_ORDER_SUCCESS,
} from "../actionTypes";
import {
  addOrderProductApi,
  addOrderApi,
  fetchOrdersApi,
  fetchLastOrdersApi,
  changeStatusApi,
  editOrderApi,
  checkDeliveryPriceApi,
  removeOrderApi,
  fetchOrderApi,
  fetchOrderNotesApi,
  addManagerNoteApi,
  removeNoteFromOrderApi,
} from "../api/orders-api";

// Получить заказы
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
    console.info(err);
    dispatch({
      type: FETCH_ORDERS_FAILURE,
      payload: err.message,
    });
  }
};

// Получить поледние заказы

export const fetchLastOrders = () => async (dispatch) => {
  dispatch({
    type: FETCH_LAST_ORDERS_START,
  });

  try {
    const ans = await fetchLastOrdersApi();

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_LAST_ORDERS_SUCCESS,
      payload: ans.data.orders,
    });
  } catch (err) {
    dispatch({
      type: FETCH_LAST_ORDERS_FAILURE,
      layload: err.message,
    });
  }
};

// Добавление заметки менеджера к заказу
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

// Добавить продукт к заказу (Добавление или редактирование заказа)
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

// Сохранение созданного заказа
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

// Сохранение отредактированного заказа
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

// Сохранение измененного статуса заказа
export const changeStatus =
  (id, status, type, query) => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_STATUS_START,
    });

    try {
      const ans = await changeStatusApi(id, status);

      if (!!ans.data.status) throw new Error(ans.data.message);

      dispatch({
        type: CHANGE_STATUS_SUCCESS,
      });

      const { size } = getState().app.tableSize;

      dispatch(fetchOrders(type, query, size));
    } catch (err) {
      console.info(err);
      dispatch({
        type: CHANGE_STATUS_FAILURE,
        payload: err.message,
      });
    }
  };

// Добавить заметку в заказ
export const addManagerNote =
  (id, values, type, query) => (dispatch, getState) => {
    const name = getState().auth.name;

    dispatch({
      type: ADD_MANAGER_NOTE_START,
    });

    addManagerNoteApi(id, { ...values, owner: name })
      .then((ans) => {
        if (!!ans.data.status) {
          try {
            const error = JSON.parse(ans.data.message);
            dispatch(stopSubmit("ordAddNoteForm", error));
            dispatch({
              type: ADD_MANAGER_NOTE_FAILURE,
              payload: error.message,
            });
          } catch (err) {
            dispatch(
              stopSubmit("ordAddNoteForm", { _error: ans.data.message })
            );
            dispatch({ type: ADD_MANAGER_NOTE_FAILURE, payload: err.message });
          }
        } else {
          dispatch({ type: ADD_MANAGER_NOTE_SUCCESS });
          dispatch(fetchOrderNotes(id));
          dispatch(clearFields("ordAddNoteForm", false, false, "comment", ""));
          const { size } = getState().app.tableSize;

          dispatch(fetchOrders(type, query, size));
        }
      })
      .catch((err) => {
        dispatch({
          type: ADD_MANAGER_NOTE_FAILURE,
          payload: err.message,
        });
      });
  };

export const setImg = (img) => (dispatch) => {
  dispatch({
    type: SET_IMG,
    payload: img,
  });
};

// Получить заметки из заказа
export const fetchOrderNotes =
  (id, position = "1") =>
  async (dispatch) => {
    dispatch({
      type: FETCH_ORDER_NOTES_START,
    });

    try {
      const ans = await fetchOrderNotesApi(id, position);

      if (!!ans.data.status) throw new Error(ans.data.message);

      dispatch({
        type: FETCH_ORDER_NOTES_SUCCESS,
        payload: ans.data.notes,
      });
    } catch (err) {
      console.info(err.message);
      dispatch({
        type: FETCH_ORDER_NOTES_FAILURE,
        payload: err.message,
      });
    }
  };

// Предзагрузка заказа для редактирования
export const fetchEditOrder = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_EDIT_ORDER_START,
  });

  try {
    const order = await dispatch(fetchOrder(id));

    console.log("editOrder: ", order);

    dispatch({
      type: FETCH_EDIT_ORDER_SUCCESS,
    });

    dispatch(
      initialize("editOrder", {
        ...order,
      })
    );
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_EDIT_ORDER_FAILURE,
      payload: err.message,
    });
  }
};

// Получить заказ по ID
export const fetchOrder = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_ORDER_START,
  });

  try {
    const ans = await fetchOrderApi(id);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_ORDER_SUCCESS,
      payload: ans.data,
    });
    return ans.data.order;
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_ORDER_FAILURE,
      payload: err.message,
    });
  }
};

//Получить стоимость перевозки почтой
export const checkDeliveryPrice =
  (form, index = 299804, weight = 500) =>
  (dispatch) => {
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

// Удалить заказ
export const removeOrder = (id, query, type) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_ORDER_START,
  });

  try {
    const ans = await removeOrderApi(id);

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: REMOVE_ORDER_SUCCESS,
    });

    dispatch(setModalOrderDelete(null));

    const { size } = getState().app.tableSize;

    dispatch(fetchOrders(type, query, size));
  } catch (err) {
    console.info(err);
    dispatch({
      type: REMOVE_ORDER_FAILURE,
      payload: err.message,
    });
  }
};

// Удалить заметку из заказа
export const removeNoteFromOrder =
  (id, time, type, query) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_NOTE_FROM_ORDER_START,
    });

    try {
      const ans = await removeNoteFromOrderApi(id, time);

      if (!!ans.data.status) throw new Error(ans.data.message);
      const { size } = getState().app.tableSize;

      dispatch({
        type: REMOVE_NOTE_FROM_ORDER_SUCCESS,
      });

      dispatch(fetchOrderNotes(id));
      dispatch(fetchOrders(type, query, size));
    } catch (err) {
      console.info(err);
      dispatch({
        type: REMOVE_NOTE_FROM_ORDER_FAILURE,
        payload: err.message,
      });
    }
  };

// Управление модальным окном добавления продукта в форму заказа
export const setModalAddProduct = (form) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ADD_PRODUCT,
    payload: form,
  });
};
// Управление модальным окном добавления заметки менеджера в форму заказа
export const setModalAddManagerNote = (form) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ADD_MANAGER_NOTE,
    payload: form,
  });
};

// Управление модальным окном фильтра стоимости
export const setModalPriceFilter = (type) => (dispatch) => {
  dispatch({
    type: SET_MODAL_PRICE_FILTER,
    payload: type,
  });
};

// Управление модальным окном удаления заказа
export const setModalOrderDelete = (id) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ORDER_DELETE,
    payload: id,
  });
};

// Управление модальным окном предпросмотра заказа
export const setModalOrderPreview = (id) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ORDER_PREVIEW,
    payload: id,
  });
};

// Управлением модальным окном заметок менеджера
export const setModalOrderManagerNotes = (id) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ORDER_MANAGER_NOTES,
    payload: id,
  });
};

// Управление модальным окном ошибок
export const setModalOrderError = () => (dispatch) => {
  dispatch({
    type: SET_MODAL_ORDER_ERROR,
  });
};
