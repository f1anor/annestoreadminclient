import instance from "./index";

export const fetchCommentsApi = async (id, query) => {
  return instance.get(`/comments/${id || ""}?${query}`);
};

export const addCommentApi = async (id, values) => {
  return instance.post(`/comments/${id}`, values);
};

export const applyCommentApi = async (id) => {
  return instance.put(`/comments/${id}`);
};

export const removeCommentApi = async (id) => {
  return instance.delete(`/comments/${id}`);
};

export const removeCommentAnsApi = async (id) => {
  return instance.delete(`/comments/ans/${id}`);
};

export const addAnsApi = async (id, values) => {
  return instance.put(`comments/ans/${id}`, values);
};
