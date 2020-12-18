import {
  FETCH_PRODUCTS_SUCCESS,
  ADD_SELECTED,
  CLEAR_SELECTED,
  CLEAR_SELECTED_ALL,
  DELETE_PRODUCTS_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  TOGGLE_ADDING_SUCCESS,
  ADD_PRODUCT_START,
  ADD_PRODUCT_FAILURE,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_FAILURE,
  DELETE_PRODUCTS_FAILURE,
  SET_IMG,
} from "../actionTypes";

const initialState = {
  products: {},
  currentProducts: [],
  page: 1,
  pageSize: 10,
  totalCount: null,
  selected: [],
  isFetching: false,
  isDeleting: false,
  isAdding: false,
  isAddingSuccess: false,
  isEditing: false,
  isEditingSuccess: false,
  edit: null,
  message: null,
  img: null,
};

export default (state = initialState, { type, payload }) => {
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
    case TOGGLE_ADDING_SUCCESS:
      return {
        ...state,
        isAddingSuccess: false,
      };
    case SET_IMG:
      return {
        ...state,
        img: payload,
      };
    default:
      return state;
  }
};
