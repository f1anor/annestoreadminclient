import React from "react";
import { Table } from "react-bootstrap";
import css from "./List.module.css";
import TableTitleContainer from "../../../../../Common/TableTitle/TableTitleContainer";
import ListItems from "./ListItems/ListItems";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";

const List = React.memo(
  ({
    products,
    selected,
    pageSize,
    sort,
    isProdDisabled,
    isSelectedAll,
    handleSelectAll,
  }) => {
    return (
      <Table hover responsive borderless className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th className={css.check}>
              <CheckboxInput
                onChange={handleSelectAll}
                checked={!!isSelectedAll}
                className={css.checkbox}
              />
            </th>
            <th className={css.photo}>Фото</th>
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.title}
              content="Название"
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.category}
              content="Категория"
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.time}
              content="Дата"
              className={css.date}
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.article}
              className={css.art}
              content="Арт"
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.article}
              className={css.amount}
              content="Кол"
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.price}
              content="Просмотры"
              className={css.views}
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.price}
              className={css.stars}
              content="Оценка"
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.price}
              className={css.comments}
              content="Комментарии"
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.price}
              className={css.price}
              content="Цена"
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.active}
              className={css.status}
              content="Статус"
            />
          </tr>
        </thead>

        <ListItems products={products} pageSize={pageSize} />
      </Table>
    );
  }
);

export default List;
