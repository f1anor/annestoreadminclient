import instance from ".";

export const addCatApi = async (title) => {
  return await instance.post("/category", { title });
};

export const fetchCategoriesApi = async () => {
  return await instance.get("/category");
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
