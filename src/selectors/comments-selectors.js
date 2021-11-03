import { createSelector } from "reselect";

export const getMetaActive = (state) => {
  return state.comments.metaActive;
};

export const getMetaWait = (state) => {
  return state.comments.metaWait;
};

export const getMetaStars = (state) => {
  return state.comments.metaStars;
};

export const getMetaName = (state) => {
  return state.comments.metaName;
};

export const getMetaImg = (state) => {
  return state.comments.metaImg;
};

export const getTotalCount = (state) => {
  return state.comments.totalCount;
};

export const getComments = (state) => {
  return state.comments.comments;
};

export const getAnsId = (state) => {
  return state.comments.ans;
};

export const getCurrentComments = (state) => {
  return state.comments.currentComments;
};

export const getCommentsForScroll = (state) => {
  return state.comments.commentsForScroll;
};

export const getCurrentCommentsForScroll = (state) => {
  return state.comments.currentCommentsForScroll;
};

// Узнать является ли подгружаемый прокручиваемый список уже полным
export const getCommentsScrollFull = createSelector(
  getTotalCount,
  getCurrentCommentsForScroll,
  (totalCount, currentCommentsForScroll) => {
    return currentCommentsForScroll.length >= totalCount;
  }
);

export const getCommentsById = createSelector(
  getComments,
  getCurrentComments,
  (comments, currentComments) => {
    if (!currentComments) return;
    return currentComments.map((comment) => {
      return comments[comment];
    });
  }
);

export const getCommentsForScrollById = createSelector(
  getCommentsForScroll,
  getCurrentCommentsForScroll,
  (commentsForScroll, currentCommentsForScroll) => {
    if (!currentCommentsForScroll) return;
    return currentCommentsForScroll.map((comment) => {
      return commentsForScroll[comment];
    });
  }
);

export const getIsFetching = (state) => {
  return state.comments.isFetching;
};

export const getIsAdding = (state) => {
  return state.comments.isAdding;
};

export const getIsRemoving = (state) => {
  return state.comments.isRemoving;
};

export const getIsAnsAdding = (state) => {
  return state.comments.isAnsAdding;
};

export const getIsAnsRemoving = (state) => {
  return state.comments.isAnsRemoving;
};

export const getIsSettingActive = (state) => {
  return state.comments.isSettingActive;
};
export const getCommentsDisabled = createSelector(
  getIsFetching,
  getIsAdding,
  getIsRemoving,
  getIsAnsAdding,
  getIsAnsRemoving,
  getIsSettingActive,
  (
    isFetching,
    isAdding,
    isRemoving,
    isAnsAdding,
    isAnsRemoving,
    isSettingActive
  ) => {
    return (
      isFetching ||
      isAdding ||
      isRemoving ||
      isAnsAdding ||
      isAnsRemoving ||
      isSettingActive
    );
  }
);

export const getCurrentScrollPage = (state) => {
  return state.comments.currentScrollPage;
};

export const getIsCommentsForScrollFetching = (state) => {
  return state.comments.isCommentsForScrollFetching;
};
