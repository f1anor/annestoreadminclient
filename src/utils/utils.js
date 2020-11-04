import { useLocation } from "react-router-dom";

export const getCoords = (elem) => {
  const box = elem.getBoundingClientRect();
  return {
    left: box.left + window.pageXOffset,
    top: box.top + window.pageYOffset,
    bottom: box.bottom + window.pageYOffset,
    right: box.right + window.pageXOffset,
    width: box.width,
    height: box.height,
  };
};

export const checkImgFormat = (imgName) => {
  if (!imgName.match(/\.(jpg|png|jpeg|bmp)$/)) return false;
  return true;
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const compareArrs = (arr1, arr2) => {
  return arr1.join(" ") === arr2.join(" ");
};

export const convertStatus = (status) => {
  switch (status) {
    case "new":
      return { title: "Новый", value: "new", variant: "info" };
    case "process":
      return { title: "В обработке", value: "process", variant: "warning" };
    case "warning":
      return { title: "Проблемный", value: "warning", variant: "danger" };
    case "success":
      return {
        title: "Ожидает самовывоза",
        value: "success",
        variant: "success",
      };
    case "complited":
      return { title: "Завершенный", value: "completed", variant: "secondary" };
    case "deleted":
      return { title: "Удаленный", value: "deleted", variant: "dark" };
    default:
      return status;
  }
};
