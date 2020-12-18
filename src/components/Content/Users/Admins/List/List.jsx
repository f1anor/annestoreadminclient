import React from "react";
import { Table } from "react-bootstrap";
import EmptySlots from "../../../../../Common/EmptySlots/EmptySlots";
import ListItems from "./ListItems/ListItems";

const List = ({ admins = [], ...props }) => {
  return (
    <Table className="mt-3" striped bordered hover responsive>
      <thead>
        <tr className="table-active">
          <th className="text-center">Фото</th>
          <th>Имя</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Дата регистрации</th>
          <th>Последний сеанс</th>
          <th className="text-center">Доступ</th>
        </tr>
      </thead>
      <tbody>
        <ListItems admins={admins} {...props} />
        <EmptySlots rows={10 - admins.length} cells={7} />
      </tbody>
    </Table>
  );
};

export default List;
