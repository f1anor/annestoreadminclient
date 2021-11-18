import instance from ".";

export const fetchCategoriesApi = async (query) => {
  return await instance.get(`/category?${query}`);
};

export const removeCatApi = async (num) => {
  return await instance.delete(`/category/${num}`);
};

export const moveUpCatApi = async (num) => {
  return await instance.put(`/category/up/${num}`);
};

export const moveDownCatApi = async (num) => {
  return await instance.put(`/category/down/${num}`);
};

export const addCatApi = async (values) => {
  return await instance.post("/category", values);
};

// Редактирование категории
export const editCatApi = async (id, values) => {
  return await instance.put(`/category/edit/${id}`, values);
};

export const setCatPositionApi = async (pos1, pos2) => {
  return await instance.put(`/category/setposition/${pos1}/${pos2}`);
};

export const fetchEditCatApi = async (id) => {
  return await instance.get(`/category/fetchedit/${id}`);
};
