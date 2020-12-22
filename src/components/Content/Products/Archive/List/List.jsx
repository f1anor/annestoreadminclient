import React from "react";
import { Table } from "react-bootstrap";
import TableTitleContainer from "../../../../../Common/TableTitle/TableTitleContainer";
import ListItems from "./ListItems/ListItems";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import css from "./List.module.css";

const List = ({
  sort,
  products,
  isProdDisabled,
  handleSelectAll,
  isSelectedAll,
}) => {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th className={css.check}>
            <CheckboxInput
              onChange={handleSelectAll}
              checked={!!isSelectedAll}
            />
          </th>
          <TableTitleContainer
            content="Добавлен"
            sort={sort.time}
            disabled={!!isProdDisabled}
          />
          <TableTitleContainer
            content="Арт"
            sort={sort.article}
            disabled={!!isProdDisabled}
          />
          <TableTitleContainer
            content="Название"
            sort={sort.title}
            disabled={!!isProdDisabled}
          />
          <th>Изображения</th>
          <TableTitleContainer
            content="Цена"
            sort={sort.price}
            disabled={!!isProdDisabled}
          />
        </tr>
      </thead>
      <ListItems products={products} />
    </Table>
  );
};

export default List;
