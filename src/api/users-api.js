const { default: instance } = require(".");

export const fetchAdminsApi = async (query) => {
  return instance.get(`/users/admins?${query}`);
};

export const toggleAccessApi = async (status, id) => {
  return instance.put(`/users/setstatus`, { status, id });
};
