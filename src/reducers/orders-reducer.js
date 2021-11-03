import {
  ADD_ORDER_SUCCESS,
  FETCH_ORDERS_SUCCESS,
  CHANGE_STATUS_START,
  CHANGE_STATUS_SUCCESS,
  CHANGE_STATUS_FAILURE,
  FETCH_ORDERS_START,
  FETCH_ORDERS_FAILURE,
  FETCH_LAST_ORDERS_START,
  FETCH_LAST_ORDERS_SUCCESS,
  FETCH_LAST_ORDERS_FAILURE,
  EDIT_ORDER_START,
  EDIT_ORDER_SUCCESS,
  EDIT_ORDER_FAILURE,
  FETCH_EDIT_ORDER_FAILURE,
  SET_MODAL_ADD_PRODUCT,
  SET_MODAL_ADD_MANAGER_NOTE,
  GET_DELIVERY_PRICE_SUCCESS,
  SET_MODAL_PRICE_FILTER,
  SET_MODAL_ORDER_DELETE,
  SET_MODAL_ORDER_PREVIEW,
  FETCH_ORDER_SUCCESS,
  ADD_ORDER_START,
  ADD_ORDER_FAILURE,
  FETCH_ORDER_START,
  FETCH_ORDER_FAILURE,
  GET_DELIVERY_PRICE_START,
  GET_DELIVERY_PRICE_FAILURE,
  ADD_ORDER_PRODUCT_START,
  ADD_ORDER_PRODUCT_SUCCESS,
  ADD_ORDER_PRODUCT_FAILURE,
  SET_MODAL_ORDER_ERROR,
  REMOVE_ORDER_START,
  REMOVE_ORDER_SUCCESS,
  REMOVE_ORDER_FAILURE,
  SET_MODAL_ORDER_MANAGER_NOTES,
  FETCH_ORDER_NOTES_START,
  FETCH_ORDER_NOTES_SUCCESS,
  FETCH_ORDER_NOTES_FAILURE,
  ADD_MANAGER_NOTE_START,
  ADD_MANAGER_NOTE_SUCCESS,
  ADD_MANAGER_NOTE_FAILURE,
} from "../actionTypes";

const initialState = {
  orders: {}, //	Все заказы
  currentOrders: [], // Заказы на странице
  lastOrders: [], //Последние заказы для дашборда
  order: null, // Один заказ, который просматривается
  counts: {}, // Колличество заказов по всем категориям
  totalCount: null, // Колличество заказов с учетом выбранной категории
  orderNotes: null, // Заметки из заказа

  // Процессы
  isFetching: null,
  isFetchSingle: null,
  isProductAdding: null,
  isDeleting: null,
  isStatusChanging: null,
  isAdding: null,
  isEditing: null,
  isAddedSuccess: null,
  isEditingSuccess: null,
  isDeliveryPriceGetting: null,
  isOrderNotesFetching: null,
  isNoteAdding: null,

  // Модальные окна
  modalAddProduct: null,
  modalAddManagerNote: null,
  modalPriceFilter: null,
  modalOrderDelete: null,
  modalOrderPreview: { id: null, print: null },
  modalOrderManagerNotes: null,

  // Собщение об ошибке
  message: null,
};

export const ordersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Добавление заказа
    case ADD_ORDER_START:
      return {
        ...state,
        isAddedSuccess: null,
        isAdding: true,
      };
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        isAddedSuccess: true,
        isAdding: null,
      };
    case ADD_ORDER_FAILURE:
      return {
        ...state,
        isAdding: null,
      };

    // Получение заказов
    case FETCH_ORDERS_START:
      return {
        ...state,
        orders: {},
        currentOrders: [],
        isFetching: true,
      };
    case FETCH_ORDERS_SUCCESS:
      const obj = {};
      payload.orders.forEach((item) => (obj[item._id] = item));
      return {
        ...state,
        orders: obj,
        currentOrders: payload.orders.map((item) => item._id),
        counts: payload.counts,
        isFetching: null,
        totalCount: payload.total,
        isAddedSuccess: null,
        isEditingSuccess: null,
      };
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: null,
        message: payload,
      };

    // Получение последних заказов
    case FETCH_LAST_ORDERS_START:
      return {
        ...state,
        isFetching: true,
        lastOrders: [],
      };
    case FETCH_LAST_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: null,
        lastOrders: payload,
      };
    case FETCH_LAST_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: null,
        message: payload,
      };

    // Изменение статуса заказа
    case CHANGE_STATUS_START:
      return {
        ...state,
        isStatusChanging: true,
      };
    case CHANGE_STATUS_SUCCESS:
      return {
        ...state,
        isStatusChanging: null,
      };
    case CHANGE_STATUS_FAILURE:
      return {
        ...state,
        isStatusChanging: null,
        message: payload,
      };

    // Сохранение отредактированного заказа
    case EDIT_ORDER_START:
      return {
        ...state,
        isEditing: true,
      };
    case EDIT_ORDER_SUCCESS:
      return {
        ...state,
        isEditing: null,
        isEditingSuccess: true,
      };
    case EDIT_ORDER_FAILURE:
      return {
        ...state,
        isEditing: null,
      };

    // Получить редактируемый заказ
    case FETCH_EDIT_ORDER_FAILURE:
      return {
        ...state,
        message: payload,
      };

    // Получить один заказ по ID
    case FETCH_ORDER_START:
      return {
        ...state,
        isFetchSingle: true,
      };
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        isFetchSingle: null,
        order: payload.order,
      };
    case FETCH_ORDER_FAILURE:
      return {
        ...state,
        isFetchSingle: null,
        message: payload,
      };

    // Получение стоимости отправки почтой
    case GET_DELIVERY_PRICE_START:
      return {
        ...state,
        isDeliveryPriceGetting: true,
      };
    case GET_DELIVERY_PRICE_SUCCESS:
      return {
        ...state,
        isDeliveryPriceGetting: null,
      };
    case GET_DELIVERY_PRICE_FAILURE:
      return {
        ...state,
        isDeliveryPriceGetting: null,
        message: payload,
      };

    // Добавление продукта в заказ
    case ADD_ORDER_PRODUCT_START:
      return {
        ...state,
        isProductAdding: true,
      };
    case ADD_ORDER_PRODUCT_SUCCESS:
      return {
        ...state,
        isProductAdding: null,
      };
    case ADD_ORDER_PRODUCT_FAILURE:
      return {
        ...state,
        isProductAdding: null,
      };

    // Удаление заказа
    case REMOVE_ORDER_START:
      return {
        ...state,
        isDeleting: true,
      };
    case REMOVE_ORDER_SUCCESS:
      return {
        ...state,
        isDeleting: null,
      };
    case REMOVE_ORDER_FAILURE:
      return {
        ...state,
        isDeleting: null,
        message: payload,
        modalOrderDelete: null,
      };

    // Получение заметок из заказа
    case FETCH_ORDER_NOTES_START:
      return {
        ...state,
        isOrderNotesFetching: true,
        orderNotes: null,
      };
    case FETCH_ORDER_NOTES_SUCCESS:
      return {
        ...state,
        isOrderNotesFetching: null,
        orderNotes: payload,
      };
    case FETCH_ORDER_NOTES_FAILURE:
      return {
        ...state,
        isOrderNotesFetching: null,
      };

    // Добавление заметки к заказу
    case ADD_MANAGER_NOTE_START:
      return {
        ...state,
        isNoteAdding: true,
      };
    case ADD_MANAGER_NOTE_SUCCESS:
      return {
        ...state,
        isNoteAdding: null,
      };
    case ADD_MANAGER_NOTE_FAILURE:
      return {
        ...state,
        isNoteAdding: false,
      };

    // Модальные окна

    // Управление модальным окном добавления продукта в заказ
    case SET_MODAL_ADD_PRODUCT:
      return {
        ...state,
        modalAddProduct: payload,
      };

    // Управление модальным окном добавления заметки менеджера в заказ
    case SET_MODAL_ADD_MANAGER_NOTE:
      return {
        ...state,
        modalAddManagerNote: payload,
      };

    // Управление модальным окном фильтра стоимости
    case SET_MODAL_PRICE_FILTER:
      return {
        ...state,
        modalPriceFilter: payload,
      };

    // Управление модальным окном удаления заказа
    case SET_MODAL_ORDER_DELETE:
      return {
        ...state,
        modalOrderDelete: payload,
      };

    // Управление модальным окном предпросмотра заказа
    case SET_MODAL_ORDER_PREVIEW:
      return {
        ...state,
        modalOrderPreview: payload,
      };

    // Управление модальным окном заметок менеджера
    case SET_MODAL_ORDER_MANAGER_NOTES:
      return {
        ...state,
        orderNotes: null,
        modalOrderManagerNotes: payload,
      };

    // Управление модальным окном ошибок (стирание ошибки)
    case SET_MODAL_ORDER_ERROR:
      return {
        ...state,
        message: "",
      };

    default:
      return state;
  }
};
