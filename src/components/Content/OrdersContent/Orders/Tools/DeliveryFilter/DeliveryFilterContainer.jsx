import withFilters from "hoc/withFilters";
import React from "react";
import { useLocation } from "react-router-dom";
import DeliveryFilter from "./DeliveryFilter";

const DeliveryFilterContainer = ({ filters, query, ...props }) => {
  const pathName = useLocation().pathname;
  const f = { ...filters };

  let current = f.delivery;

  //чистим фильтр если есть в нем доставка
  f.delivery && delete f.delivery;
  query.set("filter", JSON.stringify(f));
  const all = `${pathName}?${query.toString()}`;

  const urls = [];

  //формируем массив с содержанием: Заголовок, значение, ссылка
  [
    { title: "Почта", value: "1" },
    { title: "Самовывоз", value: "2" },
  ].forEach((method) => {
    f.delivery = method.value;
    query.set("filter", JSON.stringify(f));
    urls.push({
      ...method,
      url: `${pathName}?${query.toString()}`,
    });
  });

  //Отображение текущего выбранного фильтра доставки
  let currentText = "Все";
  if (!!current) {
    const obj = urls.find((item) => item.value === current);
    if (!!obj) currentText = obj.title;
  }

  return (
    <DeliveryFilter all={all} urls={urls} current={currentText} {...props} />
  );
};
export default withFilters(DeliveryFilterContainer);
