import React from "react";
import { Table } from "react-bootstrap";
import TableTitleContainer from "Common/TableTitle/TableTitleContainer";

import css from "./List.module.css";
import ListItems from "./ListItems/ListItems";

const List = ({ orders = [], sort, ...props }) => {
  console.log(orders);
  return (
    <Table hover responsive borderless className={css.table}>
      <thead className={css.thead}>
        <tr>
          <TableTitleContainer
            // disabled={!!isProdDisabled}
            sort={sort.number}
            content="#"
          />
          <th>Состав</th>
          <TableTitleContainer
            // disabled={!!isProdDisabled}
            sort={sort.firstName}
            content="Имя"
            className={css.date}
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
            className={css.amount}
            content="Дата"
          />
          <TableTitleContainer
            // disabled={!!isProdDisabled}
            sort={sort.changeDate}
            content="Изменен"
            className={css.views}
          />
          <th>Заметки</th>
          <TableTitleContainer
            // disabled={!!isProdDisabled}
            sort={sort.status}
            className={css.status}
            content="Статус"
          />
          <th>Сумма</th>
        </tr>
      </thead>
      <ListItems orders={orders} />
    </Table>
    // <div className={css.wrapper}>
    //   <Table className="mt-3" striped bordered hover responsive>
    //     <thead className={css.head}>
    //       <tr className="table-active">
    //         <TableTitleContainer content="№" sort={sort.number} />
    //         <th>Состав</th>
    //         <TableTitleContainer content="Имя" sort={sort.firstName} />
    //         <TableTitleContainer content="Телефон" sort={sort.phone} />
    //         <TableTitleContainer content="Дата" sort={sort.creationDate} />
    //         <TableTitleContainer content="Изменен" sort={sort.changeDate} />
    //         <th>Заметки</th>
    //         <TableTitleContainer
    //           className="text-center"
    //           content="Статус"
    //           sort={sort.status}
    //         />
    //         <th>Сумма</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <ListItems orders={orders} {...props} />
    //       <EmptySlots rows={10 - orders.length} cells={9} />
    //     </tbody>
    //   </Table>
    // </div>
  );
};

export default List;
