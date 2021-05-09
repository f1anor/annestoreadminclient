import instance from ".";

export const fetchOrdersApi = async (type, query, pageSize) => {
  return instance.get(`/orders/${type}?${query}&size=${pageSize}`);
};

export const addOrderProductApi = async (art) => {
  return instance.get(`/product/${art}`);
};

export const addOrderApi = async (order) => {
  return instance.post("/orders", order);
};

export const fetchEditOrderApi = async (id) => {
  return instance.get(`/orders/getedit/${id}`);
};

export const editOrderApi = async (id, order) => {
  return instance.put(`/orders/${id}`, order);
};

export const changeStatusApi = async (id, status) => {
  return instance.put("/orders/changeStatus", { id, status });
};

export const checkDeliveryPriceApi = async (index, weight) => {
  const response = await fetch(
    `${process.env.REACT_APP_POST_URL}&to=${index}&weight=${weight}`
  );

  return await response.json(); // читаем ответ в формате JSON
};
