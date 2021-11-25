export const getPageSize = (state) => {
  return state.app.tableSize.size;
};

//получить изображения для глобального модального окна
export const getModalImgs = (state) => {
  return state.app.modalImg;
};

export const getSidebarType = (state) => {
  return state.app.sidebarType;
};
