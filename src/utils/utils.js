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

export const formatNumber = (num, length = 3) => {
  if (num.toString().length >= length) {
    return num;
  } else {
    let arr = num.toString().split("").reverse();
    arr = [...arr, 0, 0, 0, 0];
    arr.length = length;
    return arr.reverse().join("");
  }
};

export const getDropdounPath = (arr, param, query, location) => {
  const ans = {};

  const current = query.get(param);

  const currentArr = arr.filter((item) => {
    console.log(item.value.toString(), current);
    return item.value.toString() === current;
  });

  ans.current =
    !!currentArr.length && currentArr[0] ? currentArr[0].title : null;

  query.delete(param);

  ans.clear = `${location.pathname}?${query.toString()}`;

  ans.pathArr = [];

  arr.forEach((item, index) => {
    query.set(param, item.value);
    ans.pathArr.push({
      title: item.title,
      url: `${location.pathname}?${query.toString()}`,
    });
    query.delete(param);
  });

  return ans;
};

export const getSortParams = (arr = [], query, url) => {
  const sort = {};
  arr.forEach((param) => {
    sort[param] = {};
    query.set("sort", param);
    query.set("page", 1);
    query.set("dir", 1);
    sort[param].up = `${url}?${query.toString()}`;
    query.set("dir", -1);
    sort[param].down = `${url}?${query.toString()}`;
    query.delete("sort");
    query.delete("dir");
  });

  return sort;
};

export const ID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};
