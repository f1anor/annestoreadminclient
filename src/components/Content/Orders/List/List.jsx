import React from "react";
import Table from "Common/Table/Table";
import TableTitleContainer from "Common/TableTitle/TableTitleContainer";

import css from "./List.module.css";
import ListItems from "./ListItems/ListItems";

const List = ({ orders = [], sort, ...props }) => {
  return (
    <Table>
      <thead className={css.thead}>
        <tr>
          <TableTitleContainer
            className={css.center}
            // disabled={!!isProdDisabled}
            sort={sort.number}
            content="ID Заказа"
          />
          <th className={css.structure}>Состав</th>
          <TableTitleContainer
            // disabled={!!isProdDisabled}
            sort={sort.name}
            content="Имя"
          />
          <TableTitleContainer
            // disabled={!!isProdDisabled}
            sort={sort.phone}
            className={css.art}
            content="Телефон"
          />
          <TableTitleContainer
            // disabled={!!isProdDisabled}
            sort={sort.creationDate}
            className={css.center}
            content="Дата"
          />
          <TableTitleContainer
            // disabled={!!isProdDisabled}
            sort={sort.changeDate}
            content="Изменен"
            className={css.center}
          />
          <TableTitleContainer
            // disabled={!!isProdDisabled}
            sort={sort.price}
            content="Сумма"
            className={css.center}
          />
          <TableTitleContainer
            // disabled={!!isProdDisabled}
            sort={sort.status}
            className={css.center}
            content="Статус"
          />
          <th></th>
        </tr>
      </thead>
      <ListItems orders={orders} {...props} />
    </Table>
  );
};

export default List;
