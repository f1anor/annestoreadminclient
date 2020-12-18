import React from "react";
import { useHistory } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import { useQuery } from "../../utils/utils";

const CustomPagination = React.memo(
  ({
    totalCount, // общее количество элеметов
    count, // количество элементов на одной странице
    isFetching = false, // осуществляется ли сейчас загрузка
    portionSize = 5, // одновременно страниц в пагинаторе
    link = "/",
    disabled,
  }) => {
    if (totalCount < 10) return <div />;
    const query = useQuery();
    const history = useHistory();
    const page = +query.get("page"); // текущая страница

    const allPages = Math.ceil(totalCount / count); // количество страниц
    let pagesArr = [];

    // Наполняем массив всеми страницами
    for (let i = 1; i <= allPages; i++) {
      pagesArr.push(i);
    }

    query.set("page", pagesArr[0]);
    const first = `${link}?${query}`;
    query.set("page", pagesArr[pagesArr.length - 1]);
    const last = `${link}?${query}`;

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
        <Pagination.Item
          disabled={disabled}
          key={p}
          active={page === p}
          onClick={() => history.push(url)}
        >
          {p}
        </Pagination.Item>
      );
    });

    return (
      <div>
        <Pagination>
          <Pagination.First
            disabled={disabled}
            onClick={() => history.push(first)}
          />
          {!!prevArr && (
            <Pagination.Prev
              disabled={disabled}
              onClick={() => history.push(prevArr)}
            />
          )}
          {!!dotLeft && <Pagination.Ellipsis disabled />}
          {pagesArr}
          {!!dotRight && <Pagination.Ellipsis disabled />}
          {!!nextArr && (
            <Pagination.Next
              disabled={disabled}
              onClick={() => history.push(nextArr)}
            />
          )}
          <Pagination.Last
            disabled={disabled}
            onClick={() => history.push(last)}
          />
        </Pagination>
      </div>
    );
  }
);

export default CustomPagination;
