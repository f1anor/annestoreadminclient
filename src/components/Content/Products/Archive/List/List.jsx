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
  pageSize,
}) => {
  return (
    <Table hover responsive borderless>
      <thead>
        <tr>
          <th className={css.check}>
            <CheckboxInput
              className={css.checkbox}
              onChange={handleSelectAll}
              checked={!!isSelectedAll}
            />
          </th>
          <th className={css.photo}>Фото</th>
          <TableTitleContainer
            content="Название"
            sort={sort.title}
            disabled={!!isProdDisabled}
          />
          <TableTitleContainer
            content="Дата"
            className={css.date}
            sort={sort.time}
            disabled={!!isProdDisabled}
          />
          <TableTitleContainer
            content="Арт"
            className={css.art}
            sort={sort.article}
            disabled={!!isProdDisabled}
          />
          <TableTitleContainer
            content="Цена"
            className={css.price}
            sort={sort.price}
            disabled={!!isProdDisabled}
          />
        </tr>
      </thead>
      <ListItems products={products} pageSize={pageSize} />
    </Table>
  );
};

export default List;
