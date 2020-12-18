import React from "react";
import { Table } from "react-bootstrap";
import TableTitleContainer from "../../../../../Common/TableTitle/TableTitleContainer";
import ListItems from "./ListItems/ListItems";

import css from "./List.module.css";
import EmptySlots from "../../../../../Common/EmptySlots/EmptySlots";

const List = ({ orders, sort, ...props }) => {
  return (
    <div className={css.wrapper}>
      <Table className="mt-3" striped bordered hover responsive>
        <thead className={css.head}>
          <tr className="table-active">
            <TableTitleContainer content="№" sort={sort.number} />
            <th>Состав</th>
            <TableTitleContainer content="Имя" sort={sort.firstName} />
            <TableTitleContainer content="Телефон" sort={sort.phone} />
            <TableTitleContainer content="Дата" sort={sort.creationDate} />
            <TableTitleContainer content="Изменен" sort={sort.changeDate} />
            <th>Заметки</th>
            <TableTitleContainer
              className="text-center"
              content="Статус"
              sort={sort.status}
            />
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <ListItems orders={orders} {...props} />
          <EmptySlots rows={10 - orders.length} cells={9} />
        </tbody>
      </Table>
    </div>
  );
};

export default List;
