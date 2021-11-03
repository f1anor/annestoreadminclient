import { fetchCategories } from "actions/cat-actions";
import withFilters from "hoc/withFilters";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCat, getIsCatFetching } from "selectors/cat-selectors";
import CategoryFilter from "./CategoryFilter";

const CategoryFilterContainer = ({ filters, query, isProdDisabled }) => {
  const dispatch = useDispatch();
  const categories = [...useSelector((state) => getCat(state))] ?? [];
  const isCatDisabled = useSelector((state) => getIsCatFetching(state));
  // при загрузке компонента - получаем все категории с сервера
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const pathName = useLocation().pathname;
  const f = { ...filters };

  const current = f.category || "Все";

  // Чистим филтры если в них уже есть категории
  f.category && delete f.category;
  query.set("filter", JSON.stringify(f));
  const all = `${pathName}?${query.toString()}`;

  const urls = [];

  // Формируем массив в содержанием - заголовок, значение, ссылка
  categories
    .sort((a, b) => b.count - a.count)
    .forEach((cat) => {
      f.category = cat.title;
      query.set("filter", JSON.stringify(f));
      urls.push({
        title: cat.title,
        url: `${pathName}?${query.toString()}`,
      });
    });

  return (
    <CategoryFilter
      current={current}
      all={all}
      urls={urls}
      disabled={isCatDisabled || isProdDisabled}
    />
  );
};
export default withFilters(CategoryFilterContainer);
