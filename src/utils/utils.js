import { useLocation } from "react-router-dom";

export const getCoords = (elem) => {
  const box = elem.getBoundingClientRect();
  return {
    left: box.left + window.pageXOffset,
    top: box.top + window.pageYOffset,
    right:
      document.documentElement.clientWidth - (box.right + window.pageXOffset),
    bottom:
      document.documentElement.clientHeight - (box.bottom + window.pageYOffset),
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

export const getQuery = (location) => {
  if (!location) return null;
  return new URLSearchParams(location.search);
};

export const compareArrs = (arr1, arr2) => {
  return arr1.join(" ") === arr2.join(" ");
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

export const printComponent = (component, styles) => {
  if (!component) return;

  const mywindow = window.open("", "PRINT");

  if (!mywindow) return;

  mywindow.document.write(
    "<html><head><title>" +
      document.title +
      "</title><style>" +
      styles +
      "</style>"
  );
  mywindow.document.write("</head><body>");
  mywindow.document.write(component.innerHTML);
  mywindow.document.write("</body></html>");

  mywindow.document.close();
  mywindow.focus();

  mywindow.print();
  mywindow.close();
};

export const convertToTimeAgo = (time) => {
  const dif = Date.now() - time;

  let ans = "";

  switch (true) {
    case dif < 3600000:
      ans = "Менее часа";
      break;
    case dif >= 3600000 && dif < 3600000 * 2:
      ans = "Час";
      break;
    case dif >= 3600000 * 2 && dif < 3600000 * 5:
      ans = Math.floor(dif / 3600000) + " часа";
      break;
    case dif >= 3600000 * 5 && dif < 3600000 * 21:
      ans = Math.floor(dif / 3600000) + " часов";
      break;
    case dif >= 3600000 * 21 && dif < 3600000 * 22:
      ans = Math.floor(dif / 3600000) + " час";
      break;
    case dif >= 3600000 * 22 && dif < 3600000 * 25:
      ans = Math.floor(dif / 3600000) + " часа";
      break;
    case dif >= 86400000 && dif < 86400000 * 2:
      ans = "День";
      break;
    case dif >= 86400000 * 2 && dif < 86400000 * 5:
      ans = Math.floor(dif / 86400000) + " дня";
      break;
    case dif >= 86400000 * 5 && dif < 86400000 * 21:
      ans = Math.floor(dif / 86400000) + " дней";
      break;
    case dif >= 86400000 * 21 && dif < 86400000 * 22:
      ans = Math.floor(dif / 86400000) + " день";
      break;
    case dif >= 86400000 * 22 && dif < 86400000 * 25:
      ans = Math.floor(dif / 86400000) + " дня";
      break;
    case dif >= 86400000 * 25 && dif < 86400000 * 31:
      ans = Math.floor(dif / 86400000) + " дней";
      break;
    case dif >= 2592000000 && dif < 2592000000 * 2:
      ans = "Месяц";
      break;
    case dif >= 2592000000 * 2 && dif < 2592000000 * 5:
      ans = Math.floor(dif / 2592000000) + " месяца";
      break;
    case dif >= 2592000000 * 5 && dif < 2592000000 * 13:
      ans = Math.floor(dif / 2592000000) + " месяцев";
      break;
    case dif >= 686880000000 && dif < 686880000000 * 2:
      ans = "Год";
      break;
    case dif >= 686880000000 * 2 && dif < 686880000000 * 5:
      ans = Math.floor(dif / 686880000000) + " года";
      break;
    case dif >= 686880000000 * 5 && dif < 686880000000 * 21:
      ans = Math.ceil(dif / 686880000000) + " лет";
      break;
    default:
      return "";
  }

  return ans + " назад";
};

export const generateRandom = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const tableDate = (date) => {
  if (!date) return "данные отсутствуют";
  const objDate = new Date(+date);
  return `${formatNumber(objDate.getDate(), 2)}-${formatNumber(
    objDate.getMonth() + 1,
    2
  )}-${objDate.getFullYear().toString().slice(-2)} ${formatNumber(
    objDate.getHours(),
    2
  )}:${formatNumber(objDate.getMinutes(), 2)}`;
};
