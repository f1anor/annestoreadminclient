import {
  FETCH_PRODUCTS_SUCCESS,
  ADD_SELECTED,
  CLEAR_SELECTED,
  CLEAR_SELECTED_ALL,
  DELETE_PRODUCTS_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  TOGGLE_ADDING_SUCCESS,
  TOGGLE_EDITING_SUCCESS,
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
  SELECT_ALL,
  SELECT_ARCHIVE_ALL,
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
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
  isAddingSuccess: false,
  isEditing: false,
  isEditingSuccess: false,
  edit: null,
  message: null,
  img: null,
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
        selected: [],
        isFetching: false,
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
    case SELECT_ALL:
      return {
        ...state,
        selected: state.currentProducts,
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
    case TOGGLE_ADDING_SUCCESS:
      return {
        ...state,
        isAddingSuccess: false,
      };
    case TOGGLE_EDITING_SUCCESS:
      return {
        ...state,
        isEditingSuccess: false,
      };
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
        selected: [],
        isArchiveFetching: false,
        message: null,
      };
    case FETCH_ARCHIVE_PRODUCTS_FAILURE:
      return {
        ...state,
        isArchiveFetching: false,
        message: payload,
      };
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
    default:
      return state;
  }
};
