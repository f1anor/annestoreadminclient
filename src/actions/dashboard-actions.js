import {
  FETCH_STATISTIC_FAILURE,
  FETCH_STATISTIC_START,
  FETCH_STATISTIC_SUCCESS,
  FETCH_USERS_FOR_STATISTIC_START,
  FETCH_USERS_FOR_STATISTIC_SUCCESS,
  FETCH_USERS_FOR_STATISTIC_FAILURE,
  FETCH_PRODUCTS_FOR_STATISTIC_START,
  FETCH_PRODUCTS_FOR_STATISTIC_SUCCESS,
  FETCH_PRODUCTS_FOR_STATISTIC_FAILURE,
  FETCH_ORDERS_FOR_STATISTIC_START,
  FETCH_ORDERS_FOR_STATISTIC_SUCCESS,
  FETCH_ORDERS_FOR_STATISTIC_FAILURE,
  FETCH_TOTAL_CASH_FOR_STATISTIC_START,
  FETCH_TOTAL_CASH_FOR_STATISTIC_SUCCESS,
  FETCH_TOTAL_CASH_FOR_STATISTIC_FAILURE,
  FETCH_PLATFORM_STATISTIC_START,
  FETCH_PLATFORM_STATISTIC_SUCCESS,
  FETCH_PLATFORM_STATISTIC_FAILURE,
  FETCH_SESSIONS_START,
  FETCH_SESSIONS_SUCCESS,
  FETCH_SESSIONS_FAILURE,
} from "../actionTypes";
import {
  fetchStatisticApi,
  fetchUsersForStatisticApi,
  fetchProductsForStatisticApi,
  fetchOrdersForStatisticApi,
  fetchTotalCashForStatisticApi,
  fetchPlatformStatisticApi,
  fetchSessionsApi,
} from "api/dashboard-api";

export const fetchStatistic = (query) => async (dispatch) => {
  dispatch({
    type: FETCH_STATISTIC_START,
  });

  try {
    const ans = await fetchStatisticApi(query);

    if (!!ans.data.status) throw new Error(ans.data.message);
    dispatch({
      type: FETCH_STATISTIC_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_STATISTIC_FAILURE,
      payload: err.message,
    });
  }
};

// Получить пользователей для виджета
export const fetchUsersForStatistic = () => async (dispatch) => {
  dispatch({
    type: FETCH_USERS_FOR_STATISTIC_START,
  });

  try {
    const ans = await fetchUsersForStatisticApi();

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_USERS_FOR_STATISTIC_SUCCESS,
      payload: ans.data.users,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_USERS_FOR_STATISTIC_FAILURE,
      payload: err.message,
    });
  }
};

// Получить продукты для виджета
export const fetchProductsForStatistic = () => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCTS_FOR_STATISTIC_START,
  });

  try {
    const ans = await fetchProductsForStatisticApi();

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_PRODUCTS_FOR_STATISTIC_SUCCESS,
      payload: ans.data.products,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_PRODUCTS_FOR_STATISTIC_FAILURE,
      payload: err.message,
    });
  }
};

// Получить заказы для виджета
export const fetchOrdersForStatistic = () => async (dispatch) => {
  dispatch({
    type: FETCH_ORDERS_FOR_STATISTIC_START,
  });

  try {
    const ans = await fetchOrdersForStatisticApi();

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_ORDERS_FOR_STATISTIC_SUCCESS,
      payload: ans.data.orders,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_ORDERS_FOR_STATISTIC_FAILURE,
      payload: err.message,
    });
  }
};

// Получить доход для виджета
export const fetchTotalCashForStatistic = () => async (dispatch) => {
  dispatch({
    type: FETCH_TOTAL_CASH_FOR_STATISTIC_START,
  });

  try {
    const ans = await fetchTotalCashForStatisticApi();

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_TOTAL_CASH_FOR_STATISTIC_SUCCESS,
      payload: ans.data.cash,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_TOTAL_CASH_FOR_STATISTIC_FAILURE,
      payload: err.message,
    });
  }
};

// Получить статистику по платформам
export const fetchPlatformStatistic = () => async (dispatch) => {
  dispatch({
    type: FETCH_PLATFORM_STATISTIC_START,
  });

  try {
    const ans = await fetchPlatformStatisticApi();

    if (!!ans.data.status) throw new Error(ans.data.message);

    dispatch({
      type: FETCH_PLATFORM_STATISTIC_SUCCESS,
      payload: ans.data.platformStatistic,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_PLATFORM_STATISTIC_FAILURE,
      payload: err.message,
    });
  }
};

// Получить сессии за весь период для таблицы
export const fetchSessions = (page) => async (dispatch) => {
  dispatch({
    type: FETCH_SESSIONS_START,
  });

  try {
    const ans = await fetchSessionsApi(page);

    if (!!ans.data.status) throw new Error(ans.data.message);
    dispatch({
      type: FETCH_SESSIONS_SUCCESS,
      payload: ans.data,
    });
  } catch (err) {
    console.info(err);
    dispatch({
      type: FETCH_SESSIONS_FAILURE,
      payload: err.message,
    });
  }
};
