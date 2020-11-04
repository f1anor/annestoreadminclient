import instance from ".";

export const fetchStatisticApi = async (query) => {
  return await instance(
    `/statistic/?${typeof query !== "undefined" ? query : ""}`
  );
};
