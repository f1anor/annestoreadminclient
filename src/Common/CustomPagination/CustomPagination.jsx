import React from "react";
import { useQuery } from "utils/utils";

import css from "./CustomPagination.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CustomPagination = React.memo(
  ({
    totalCount, // общее количество элеметов
    count, // количество элементов на одной странице
    isFetching = false, // осуществляется ли сейчас загрузка
    portionSize = 5, // одновременно страниц в пагинаторе
    link = "/",
    disabled,
  }) => {
    const query = useQuery();
    const page = +query.get("page"); // текущая страница

    const allPages = Math.ceil(totalCount / count); // количество страниц
    let pagesArr = [];

    // Наполняем массив всеми страницами
    for (let i = 1; i <= allPages; i++) {
      pagesArr.push(i);
    }

    const halfPS = Math.floor(portionSize / 2);

    let leftPortionPageNumber;
    let rightPortionPageNumber;

    let dotLeft = false;
    let dotRight = false;

    let prevArr = false;
    let nextArr = false;

    if (pagesArr.length <= portionSize) {
      //Если всего страниц меньше чем должно быть в порции
      leftPortionPageNumber = pagesArr[0];
      rightPortionPageNumber = pagesArr.length;
    } else if (page - halfPS > 0) {
      leftPortionPageNumber = page - halfPS;
    } else {
      const arrFirst = pagesArr.filter((p) => p <= page && p > 0);
      const arrLast = pagesArr.filter(
        (p) =>
          p <= pagesArr[pagesArr.length - 1] &&
          arrFirst[0] + p === portionSize + 1
      );
      leftPortionPageNumber = arrFirst[0];
      rightPortionPageNumber = arrLast[arrLast.length - 1];
    }

    if (pagesArr.length > portionSize) {
      if (page + halfPS <= pagesArr[pagesArr.length - 1]) {
        if (!rightPortionPageNumber) rightPortionPageNumber = page + halfPS;
      } else {
        const arrLast = pagesArr.filter(
          (p) => p >= page && p <= pagesArr[pagesArr.length - 1]
        );
        const arrFirst = pagesArr.filter(
          (p) => p > 0 && arrLast[arrLast.length - 1] - p === portionSize - 1
        );
        if (!rightPortionPageNumber)
          rightPortionPageNumber = arrLast[arrLast.length - 1];
        leftPortionPageNumber = arrFirst[0];
      }
    }

    //Если левая граница не равна первой странице тогда рисуем левые точки
    if (leftPortionPageNumber !== 1) dotLeft = true;
    //Если правая граница не равна последней странице тогда рисуем правые точки
    if (rightPortionPageNumber !== pagesArr[pagesArr.length - 1])
      dotRight = true;

    if (page > 1) {
      query.set("page", page - 1);
      prevArr = `${link}?${query}`;
    }
    if (page < pagesArr[pagesArr.length - 1]) {
      query.set("page", page + 1);
      nextArr = `${link}?${query}`;
    }

    pagesArr = pagesArr.filter(
      (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
    );

    pagesArr = pagesArr.map((p) => {
      query.set("page", p);
      const url = `${link}?${query}`;
      return (
        <li key={p}>
          <Link
            className={[
              !!disabled ? css.btnDisabled : " ",
              page === p ? css.active : " ",
              css.page,
            ].join(" ")}
            to={url}
          >
            {p}
          </Link>
        </li>
      );
    });

    return (
      <div className={css.pagination}>
        <ul className={css.list}>
          <li>
            <Link
              className={[
                !!disabled || !prevArr ? css.btnDisabled : " ",
                css.btn,
              ].join(" ")}
              to={prevArr}
            >
              Назад
            </Link>
          </li>
          {!!dotLeft && <li>...</li>}
          {pagesArr}
          {!!dotRight && <li>...</li>}
          <li>
            <Link
              className={[
                !!disabled || !nextArr ? css.btnDisabled : " ",
                css.btn,
              ].join(" ")}
              to={nextArr}
            >
              Вперед
            </Link>
          </li>
        </ul>
      </div>
    );
  }
);

export default CustomPagination;
