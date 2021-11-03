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

const initialState = {
  data: [], // данные для главного графика по посещениям и заказам
  usersForStatistic: { all: 0, last: 0 }, // данные для виджета о пользователях
  productsForStatistic: { all: 0, last: 0 }, // данные для виджета о продуктах
  ordersForStatistic: { all: 0, last: 0 }, // данные для виджета о заказах
  totalCashForStatistic: { all: 0, last: 0 }, // данные для виджета о прибыли
  platformStatistic: { global: [], details: [] }, // данные о платформах
  sessions: [], // сессии

  //состояния
  isFetching: null,
  isUsersForStatisticFetching: null,
  isProductsForStatisticFetching: null,
  isOrdersForStatisticFetching: null,
  isTotalCashForStatisticFetching: null,
  isPlatformStatisticFetching: null,
  isSessionsFetching: null,

  // ошибки
  message: null,
};

export const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STATISTIC_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_STATISTIC_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isFetching: false,
      };
    case FETCH_STATISTIC_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: payload.message,
      };

    // Предзагружаем данные о пользователях для виджета
    case FETCH_USERS_FOR_STATISTIC_START:
      return {
        ...state,
        isUsersForStatisticFetching: true,
      };
    case FETCH_USERS_FOR_STATISTIC_SUCCESS:
      return {
        ...state,
        usersForStatistic: payload,
        isUsersForStatisticFetching: null,
      };
    case FETCH_USERS_FOR_STATISTIC_FAILURE:
      return {
        ...state,
        isUsersForStatisticFetching: null,
        message: payload,
      };

    // Предзагружаем данные о продуктах для виджета
    case FETCH_PRODUCTS_FOR_STATISTIC_START:
      return {
        ...state,
        isProductsForStatisticFetching: true,
      };
    case FETCH_PRODUCTS_FOR_STATISTIC_SUCCESS:
      return {
        ...state,
        productsForStatistic: payload,
        isProductsForStatisticFetching: null,
      };
    case FETCH_PRODUCTS_FOR_STATISTIC_FAILURE:
      return {
        ...state,
        isProductsForStatisticFetching: null,
        message: payload,
      };

    // Предзагружаем данные о заказах для виджета
    case FETCH_ORDERS_FOR_STATISTIC_START:
      return {
        ...state,
        isOrdersForStatisticFetching: true,
      };
    case FETCH_ORDERS_FOR_STATISTIC_SUCCESS:
      return {
        ...state,
        ordersForStatistic: payload,
        isOrdersForStatisticFetching: null,
      };
    case FETCH_ORDERS_FOR_STATISTIC_FAILURE:
      return {
        ...state,
        isOrdersForStatisticFetching: null,
        message: payload,
      };

    // Предзагружаем данные о прибыли для виджета
    case FETCH_TOTAL_CASH_FOR_STATISTIC_START:
      return {
        ...state,
        isTotalCashForStatisticFetching: true,
      };
    case FETCH_TOTAL_CASH_FOR_STATISTIC_SUCCESS:
      return {
        ...state,
        totalCashForStatistic: payload,
        isTotalCashForStatisticFetching: null,
      };
    case FETCH_TOTAL_CASH_FOR_STATISTIC_FAILURE:
      return {
        ...state,
        isTotalCashForStatisticFetching: null,
        message: payload,
      };

    // Получаем данные о платформах
    case FETCH_PLATFORM_STATISTIC_START:
      return {
        ...state,
        isPlatformStatisticFetching: true,
      };
    case FETCH_PLATFORM_STATISTIC_SUCCESS:
      const global = [];
      const details = [];
      for (let key in payload.global) {
        global.push({ name: key, value: payload.global[key] });
      }
      for (let key in payload.details) {
        details.push({ name: key, value: payload.details[key] });
      }
      return {
        ...state,
        platformStatistic: {
          global: [...global],
          details: [...details.sort((a, b) => b.value - a.value)],
        },
        isPlatformStatisticFetching: null,
      };
    case FETCH_PLATFORM_STATISTIC_FAILURE:
      return {
        ...state,
        isPlatformStatisticFetching: null,
        message: payload,
      };

    // Получаем сессии для таблицы
    case FETCH_SESSIONS_START:
      return {
        ...state,
        isSessionsFetching: true,
      };
    case FETCH_SESSIONS_SUCCESS:
      return {
        ...state,
        sessions: payload.sessions,
        totalCount: payload.totalCount,
        isSessionsFetching: null,
      };
    case FETCH_SESSIONS_FAILURE:
      return {
        ...state,
        isSessionsFetching: null,
      };

    default:
      return state;
  }
};
