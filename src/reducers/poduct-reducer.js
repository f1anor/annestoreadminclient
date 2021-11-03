import {
  FETCH_PRODUCTS_SUCCESS,
  ADD_SELECTED,
  CLEAR_SELECTED,
  CLEAR_SELECTED_ALL,
  DELETE_PRODUCTS_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_START,
  ADD_PRODUCT_FAILURE,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_FAILURE,
  DELETE_PRODUCTS_FAILURE,
  FETCH_ARCHIVE_PRODUCTS_SUCCESS,
  MOVE_TO_ARCHIVE_START,
  MOVE_TO_ARCHIVE_SUCCESS,
  MOVE_TO_ARCHIVE_FAILURE,
  RESTORE_FROM_ARCHIVE_FAILURE,
  RESTORE_FROM_ARCHIVE_START,
  RESTORE_FROM_ARCHIVE_SUCCESS,
  FETCH_ARCHIVE_PRODUCTS_START,
  FETCH_ARCHIVE_PRODUCTS_FAILURE,
  SELECT_ALL_START,
  SELECT_ALL_SUCCESS,
  SELECT_ALL_FAILURE,
  SELECT_ARCHIVE_ALL,
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
  SET_MODAL_PRODUCTS_ERROR,
  SET_MODAL_PRODUCT_PRICE_FILTER,
  SET_MODAL_ALL_PRODUCTS_TO_ARCHIVE,
  SET_MODAL_ARCHIVE_PRODUCTS_DELETE,
  SET_MODAL_ARCHIVE_PRODUCTS_RESTORE,
  MAKE_CUSTOM_ORDER_FAILURE,
  MAKE_CUSTOM_ORDER_START,
  MAKE_CUSTOM_ORDER_SUCCESS,
} from "../actionTypes";

const initialState = {
  products: {},
  archiveProducts: {},
  currentProducts: [],
  currentArchiveProducts: [],
  page: 1,
  archivePage: 1,
  totalCount: null,
  archiveTotalCount: null,
  selected: [],
  archiveSelected: [],
  isFetching: false,
  isArchiveFetching: false,
  isDeleting: false,
  isMovingToArchive: false,
  isRestoring: false,
  isAdding: false,
  isSelecting: false,
  isAddingSuccess: false,
  isEditing: false,
  isEditingSuccess: false,
  isCustomOrderMaking: false,
  edit: null,
  message: null,
  img: null,
  productsToOrder: [], //ID продуктов, которые автоматически добавляются в новый заказ

  //модальные окна
  modalProductPriceFilter: null,
  modalAllProductsToArchive: null,
  modalArchiveProductsDelete: null,
  modalArchiveProductsRestore: null,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      const obj = {};
      payload.products.forEach((product) => (obj[product._id] = product));
      return {
        ...state,
        products: { ...state.products, ...obj },
        currentProducts: payload.products.map((product) => product._id),
        totalCount: payload.totalCount,
        isFetching: false,
        isAddingSuccess: null,
        isEditingSuccess: null,
        message: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        message: payload,
      };
    case ADD_SELECTED:
      return {
        ...state,
        selected: [...state.selected, payload],
      };

    // Выделение всех элементов в таблице
    case SELECT_ALL_START:
      return {
        ...state,
        isSelecting: true,
      };
    case SELECT_ALL_SUCCESS:
      return {
        ...state,
        selected: payload.ids.map((obj) => obj._id),
        isSelecting: false,
      };
    case SELECT_ALL_FAILURE:
      return {
        ...state,
        isSelecting: false,
        message: payload,
      };
    case SELECT_ARCHIVE_ALL:
      return {
        ...state,
        selected: state.currentArchiveProducts,
      };
    case CLEAR_SELECTED:
      return {
        ...state,
        selected: state.selected.filter((id) => id !== payload),
      };
    case CLEAR_SELECTED_ALL:
      return {
        ...state,
        selected: [],
      };

    //Удаление продукта
    case DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        isDeleting: null,
        selected: [],
      };
    case DELETE_PRODUCTS_FAILURE:
      return {
        ...state,
        isDeleting: null,
        message: payload,
      };

    //Добавление продукта
    case ADD_PRODUCT_START:
      return {
        ...state,
        isAdding: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isAdding: false,
        isAddingSuccess: true,
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isAdding: false,
      };

    //Редактирование продукта
    case EDIT_PRODUCT_START:
      return {
        ...state,
        isEditing: true,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isEditingSuccess: true,
      };
    case EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        isEditing: false,
      };

    //Получить с сервера продукты из архива
    case FETCH_ARCHIVE_PRODUCTS_START:
      return {
        ...state,
        isArchiveFetching: true,
      };
    case FETCH_ARCHIVE_PRODUCTS_SUCCESS:
      const object = {};
      payload.products.forEach((product) => (object[product._id] = product));
      return {
        ...state,
        archiveProducts: { ...state.products, ...object },
        currentArchiveProducts: payload.products.map((product) => product._id),
        archiveTotalCount: payload.totalCount,
        isArchiveFetching: false,
        message: null,
      };
    case FETCH_ARCHIVE_PRODUCTS_FAILURE:
      return {
        ...state,
        isArchiveFetching: false,
        message: payload,
      };

    //Переместить продукты в архив
    case MOVE_TO_ARCHIVE_START:
      return {
        ...state,
        isMovingToArchive: true,
      };
    case MOVE_TO_ARCHIVE_SUCCESS:
      return {
        ...state,
        isMovingToArchive: false,
      };
    case MOVE_TO_ARCHIVE_FAILURE:
      return {
        ...state,
        isMovingToArchive: false,
        message: payload,
      };

    //Восстановить продукты из архива
    case RESTORE_FROM_ARCHIVE_START:
      return {
        ...state,
        isRestoring: true,
      };
    case RESTORE_FROM_ARCHIVE_SUCCESS:
      return {
        ...state,
        isRestoring: false,
      };
    case RESTORE_FROM_ARCHIVE_FAILURE:
      return {
        ...state,
        isRestoring: false,
        message: payload,
      };

    // Создание списка продуктов предварительно выбранных для заказа
    case MAKE_CUSTOM_ORDER_START:
      return {
        ...state,
        isCustomOrderMaking: true,
      };
    case MAKE_CUSTOM_ORDER_SUCCESS:
      return {
        ...state,
        productsToOrder: payload,
        isCustomOrderMaking: false,
      };
    case MAKE_CUSTOM_ORDER_FAILURE:
      return {
        ...state,
        message: payload,
        isCustomOrderMaking: false,
      };

    // Управление модальным окном ошибок (стирание ошибки)
    case SET_MODAL_PRODUCTS_ERROR:
      return {
        ...state,
        message: null,
      };

    // Управление модальным окном фильтра цены
    case SET_MODAL_PRODUCT_PRICE_FILTER:
      return {
        ...state,
        modalProductPriceFilter: payload,
      };

    // Управление модальным окном отправки продуктов в архив
    case SET_MODAL_ALL_PRODUCTS_TO_ARCHIVE:
      return {
        ...state,
        modalAllProductsToArchive: payload,
      };

    // Управление модальным окном удаления продукта из архивов
    case SET_MODAL_ARCHIVE_PRODUCTS_DELETE:
      return {
        ...state,
        modalArchiveProductsDelete: payload,
      };

    // Управление модальным окном восстановления продуктов из архива
    case SET_MODAL_ARCHIVE_PRODUCTS_RESTORE:
      return {
        ...state,
        modalArchiveProductsRestore: payload,
      };

    default:
      return state;
  }
};
