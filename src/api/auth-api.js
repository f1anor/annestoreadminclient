const { default: instance } = require(".");

export const preloadAvatarApi = async (img, name) => {
  const formData = new FormData();
  formData.append("myImage", img);
  formData.name = img.name;
  return await instance.post(`/auth/preloadimg/${name}`, formData);
};

export const regNewAdminApi = async (values) => {
  return await instance.post("/auth/reg", values);
};

export const signInApi = async (values) => {
  return await instance.put("/auth", values);
};

export const restoreApi = async () => {
  return await instance.get("/auth");
};
