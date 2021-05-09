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

export const renameCatApi = async (id, values) => {
  return await instance.put(`/category/rename/${id}`, values);
};
