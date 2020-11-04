import instance from ".";

export const addOrderProductApi = async (art) => {
  return instance.get(`/product/${art}`);
};

export const addOrderApi = async (order) => {
  return instance.post("/orders", order);
};

export const fetchOrdersApi = async (query) => {
  return instance.get(`/orders?${query}`);
};

export const changeStatusApi = async (id, status) => {
  return instance.put("/orders/changeStatus", { id, status });
};
