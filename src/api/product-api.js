import instance from ".";

export const checkArticleApi = async (article) => {
  return await instance.get(`/product/check/${article}`);
};

export const preloadImageApi = async (img, imgName) => {
  const formData = new FormData();
  formData.append("myImage", img);
  formData.name = img.name;
  return await instance.post(`/product/preloadimg/${imgName}`, formData);
};

export const addProductApi = async (product) => {
  return await instance.post(`/product`, product);
};

export const editProductApi = async (product, id) => {
  return await instance.post(`/product/edit`, { fields: product, id });
};

export const fetchProductsApi = async (params, pageSize) => {
  return await instance.get(`/product/?${params}&size=${pageSize}`);
};

export const deleteProductsApi = async (selected) => {
  return await instance.post("/product/delete", { selected });
};

export const fetchEditProductApi = async (article) => {
  return await instance.get(`/product/update/${article}`);
};

export const moveToArchiveApi = async (selected) => {
  return await instance.post("/product/toarchive", { selected });
};

export const fetchArchiveProductsApi = async (query) => {
  return await instance.get(`/product/archive?${query}`);
};

export const restoreFromArchiveApi = async (selected) => {
  return await instance.post("/product/restore", { selected });
};

export const toggleStatusApi = async (id, status) => {
  return await instance.put("/product/status", { id, status });
};
