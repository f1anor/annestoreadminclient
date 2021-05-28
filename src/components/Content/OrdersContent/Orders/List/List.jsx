import React from "react";
import Table from "Common/Table/Table";
import TableTitleContainer from "Common/TableTitle/TableTitleContainer";

import css from "./List.module.css";
import ListItems from "./ListItems/ListItems";

const List = React.memo(({ orders = [], sort, isDisabled, ...props }) => {
  return (
    <Table>
      <thead className={css.thead}>
        <tr>
          <th className={css.structure}>ID Заказа</th>
          <th className={css.structure}>Состав</th>
          <TableTitleContainer
            disabled={!!isDisabled}
            sort={sort.name}
            content="Имя"
          />
          <TableTitleContainer
            disabled={!!isDisabled}
            sort={sort.phone}
            className={css.art}
            content="Телефон"
          />
          <TableTitleContainer
            disabled={!!isDisabled}
            sort={sort.creationDate}
            className={css.center}
            content="Дата"
          />
          <TableTitleContainer
            disabled={!!isDisabled}
            sort={sort.changeDate}
            content="Заметки"
            className={css.center}
          />
          <TableTitleContainer
            disabled={!!isDisabled}
            sort={sort.price}
            content="Сумма"
            className={css.center}
          />
          <TableTitleContainer
            disabled={!!isDisabled}
            sort={sort.status}
            className={css.center}
            content="Статус"
          />
          <th></th>
        </tr>
      </thead>
      <ListItems orders={orders} isDisabled={isDisabled} {...props} />
    </Table>
  );
});

export default List;
