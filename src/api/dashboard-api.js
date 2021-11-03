import instance from ".";

export const fetchStatisticApi = async (query) => {
  return await instance(
    `/statistic/?${typeof query !== "undefined" ? query : ""}&size=4`
  );
};

export const fetchUsersForStatisticApi = async () => {
  return await instance.get("/statistic/userscount");
};

export const fetchProductsForStatisticApi = async () => {
  return await instance.get("/statistic/productscount");
};

export const fetchOrdersForStatisticApi = async () => {
  return await instance.get("/statistic/orderscount");
};

export const fetchTotalCashForStatisticApi = async () => {
  return await instance.get("/statistic/totalcash");
};

export const fetchPlatformStatisticApi = async () => {
  return await instance.get("/statistic/platform");
};

export const fetchSessionsApi = async (page) => {
  return await instance.get(`/statistic/sessions/${page}`);
};
