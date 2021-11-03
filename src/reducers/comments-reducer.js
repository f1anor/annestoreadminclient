import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  SET_COMMENT_ANSWER,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  APPLY_COMMENT_START,
  APPLY_COMMENT_SUCCESS,
  APPLY_COMMENT_FAILURE,
  REMOVE_COMMENT_START,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILURE,
  ADD_ANS_START,
  ADD_ANS_SUCCESS,
  ADD_ANS_FAILURE,
  REMOVE_COMMENT_ANS_START,
  REMOVE_COMMENT_ANS_SUCCESS,
  REMOVE_COMMENT_ANS_FAILURE,
  FETCH_COMMENTS_FOR_SCROLL_PAGE_SUCCESS,
  FETCH_COMMENTS_FOR_SCROLL_PAGE_START,
  FETCH_COMMENTS_FOR_SCROLL_PAGE_FAILURE,
  CLEAR_COMMENTS_FOR_SCROLL_PAGE,
} from "actionTypes";

const initialState = {
  comments: {},
  currentComments: [],
  commentsForScroll: {}, // комментарии которые нужны для прокручиваемого списка
  currentCommentsForScroll: [], // массив с id комментариев которые нужны непосредственно на странице
  currentScrollPage: 1, // текущая порция в постепенно подгружаемом списке
  totalCount: 0,
  pageSize: 10,
  metaImg: null,
  metaName: null,
  metaActive: 0,
  metaWait: 0,
  ans: "",
  metaStars: {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  },
  isFetching: null,
  isAdding: null,
  isRemoving: null,
  isAnsAdding: null,
  isAnsRemoving: null,
  isSettingActive: null,
  isCommentsForScrollFetching: null, // закгружаются ли комментарии для прокручиваемого списка
};

export const commentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COMMENTS_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FETCH_COMMENTS_SUCCESS: {
      const obj = {};
      payload.comments.forEach((comment) => {
        obj[comment._id] = comment;
      });
      const newState = {
        ...state,
        isFetching: false,
        message: null,
        metaImg: payload.img || null,
        metaName: payload.name || "Все продукты",
        metaActive: payload.totalActive,
        metaWait: payload.totalWait,
        metaStars: payload.stars,
        totalCount: payload.total,
        comments: obj,
        currentComments: payload.comments.map((comment) => comment._id),
      };
      if (!!payload.stars) newState.metaStars = { ...payload.stars };
      return newState;
    }
    case FETCH_COMMENTS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        message: payload,
      };
    }
    // Загрузили коменты для страниц с бесконечной прокруткой
    case FETCH_COMMENTS_FOR_SCROLL_PAGE_START:
      return {
        ...state,
        isCommentsForScrollFetching: true,
      };
    case FETCH_COMMENTS_FOR_SCROLL_PAGE_SUCCESS:
      const tmp = {};
      payload.comments.forEach((comment) => {
        tmp[comment._id] = comment;
      });

      return {
        ...state,
        commentsForScroll: {
          ...state.commentsForScroll,
          ...tmp,
        },
        currentCommentsForScroll: [
          ...state.currentCommentsForScroll,
          ...payload.comments.map((comment) => comment._id),
        ],
        currentScrollPage: state.currentScrollPage + 1,
        isCommentsForScrollFetching: null,
        totalCount: payload.totalActive,
      };
    case FETCH_COMMENTS_FOR_SCROLL_PAGE_FAILURE:
      return {
        ...state,
        isCommentsForScrollFetching: null,
      };

    // Сбросить загруженные коментарии для страницы с бесконечной прокруткой
    case CLEAR_COMMENTS_FOR_SCROLL_PAGE:
      return {
        ...state,
        commentsForScroll: {},
        currentCommentsForScroll: [],
        currentScrollPage: 1,
      };

    case SET_COMMENT_ANSWER: {
      return {
        ...state,
        ans: payload,
      };
    }
    case ADD_COMMENT_START: {
      return {
        ...state,
        isAdding: true,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      return {
        ...state,
        isAdding: false,
        message: null,
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        isAdding: false,
        message: payload,
      };
    }
    case APPLY_COMMENT_START: {
      return {
        ...state,
        isSettingActive: true,
      };
    }
    case APPLY_COMMENT_SUCCESS: {
      return {
        ...state,
        isSettingActive: false,
        message: null,
      };
    }
    case APPLY_COMMENT_FAILURE: {
      return {
        ...state,
        isSettingActive: null,
        message: payload,
      };
    }
    case REMOVE_COMMENT_START: {
      return {
        ...state,
        isRemoving: true,
      };
    }
    case REMOVE_COMMENT_SUCCESS: {
      return {
        ...state,
        isRemoving: false,
        message: null,
      };
    }
    case REMOVE_COMMENT_FAILURE: {
      return {
        ...state,
        isRemoving: false,
        message: payload,
      };
    }
    case ADD_ANS_START: {
      return {
        ...state,
        isAnsAdding: true,
      };
    }
    case ADD_ANS_SUCCESS: {
      return {
        ...state,
        isAnsAdding: false,
        message: null,
      };
    }
    case ADD_ANS_FAILURE: {
      return {
        ...state,
        isAnsAdding: false,
        message: payload,
      };
    }
    case REMOVE_COMMENT_ANS_START: {
      return {
        ...state,
        isAnsRemoving: true,
      };
    }
    case REMOVE_COMMENT_ANS_SUCCESS: {
      return {
        ...state,
        isAnsRemoving: false,
        message: null,
      };
    }
    case REMOVE_COMMENT_ANS_FAILURE: {
      return {
        ...state,
        isAnsRemoving: false,
        message: payload,
      };
    }
    default: {
      return state;
    }
  }
};
