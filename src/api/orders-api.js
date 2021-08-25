import instance from ".";

export const fetchOrdersApi = async (type, query, pageSize) => {
  return instance.get(`/orders/${type}?${query}&size=${pageSize}`);
};

export const fetchLastOrdersApi = async () => {
  return instance.get("/orders/last");
};

export const addOrderProductApi = async (art) => {
  return instance.get(`/product/${art}`);
};

export const addOrderApi = async (order) => {
  return instance.post("/orders", order);
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

export const removeOrderApi = async (id) => {
  return instance.delete(`/orders/${id}`);
};

export const fetchOrderApi = async (id) => {
  return instance.get(`/orders/single/${id}`);
};

export const fetchOrderNotesApi = async (id, position) => {
  return instance.get(`/orders/notes/${id}/${position}`);
};

export const addManagerNoteApi = async (id, values) => {
  return instance.post(`/orders/addnote/${id}`, values);
};

export const removeNoteFromOrderApi = async (id, time) => {
  return instance.put(`/orders/removenote/${id}/${time}`);
};
