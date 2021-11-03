import React from "react";
import Table from "Common/Table/Table";
import TableTitleContainer from "Common/TableTitle/TableTitleContainer";
import ListItems from "./ListItems/ListItems";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import css from "./List.module.css";

const List = ({
  sort,
  products,
  isProdDisabled,
  handleSelectAll,
  isSelectedAll,
  pageSize,
}) => {
  //TODO: Не работает сортировка по артиклу (ID)
  return (
    <Table>
      <thead>
        <tr>
          <th className={css.check}>
            <CheckboxInput
              className={css.checkbox}
              onChange={handleSelectAll}
              checked={!!isSelectedAll}
            />
          </th>
          <TableTitleContainer
            content="Арт"
            className={css.center}
            sort={sort.article}
            disabled={!!isProdDisabled}
          />
          <th className={css.photo}>Фото</th>
          <TableTitleContainer
            content="Название"
            sort={sort.title}
            disabled={!!isProdDisabled}
          />
          <TableTitleContainer
            content="Дата"
            className={css.center}
            sort={sort.date}
            disabled={!!isProdDisabled}
          />
          <TableTitleContainer
            disabled={!!isProdDisabled}
            sort={sort.stars}
            className={css.center}
            content="Оценка"
          />
          <TableTitleContainer
            disabled={!!isProdDisabled}
            sort={sort.views}
            className={css.center}
            content="Просмотров"
          />
          <TableTitleContainer
            content="Цена"
            className={css.price}
            sort={sort.price}
            disabled={!!isProdDisabled}
          />
          <th></th>
        </tr>
      </thead>
      <ListItems products={products} pageSize={pageSize} />
    </Table>
  );
};

export default List;
