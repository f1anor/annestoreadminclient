import instance from ".";

export const preloadImageApi = async (img, name) => {
  const formData = new FormData();
  formData.append("myImage", img);
  formData.name = img.name;
  return await instance.post(`/product/preloadimg/${name}`, formData);
};

export const addProductApi = async (product) => {
  return await instance.post(`/product`, product);
};

export const editProductApi = async (product) => {
  return await instance.update(`/product`, product);
};

export const fetchProductsApi = async (params) => {
  return await instance.get(`/product/?${params}`);
};

export const deleteProductsApi = async (selected) => {
  return await instance.post("/product/delete", { selected });
};

export const fetchEditProductApi = async (article) => {
  return await instance.get(`/product/update/${article}`);
};
