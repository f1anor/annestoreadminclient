import React from "react";
import Table from "Common/Table/Table";
import css from "./List.module.css";
import TableTitleContainer from "Common/TableTitle/TableTitleContainer";
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
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort._id}
              className={css.art}
              content="Арт. №"
            />
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
              sort={sort.date}
              content="Дата"
              className={css.center}
            />

            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.amount}
              className={css.center}
              content="Кол"
            />

            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.stars}
              className={css.center}
              content="Оценка"
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.price}
              className={css.center}
              content="Цена"
            />
            <TableTitleContainer
              disabled={!!isProdDisabled}
              sort={sort.active}
              className={css.center}
              content="Статус"
            />
            <th></th>
          </tr>
        </thead>

        <ListItems products={products} pageSize={pageSize} />
      </Table>
    );
  }
);

export default List;
