import React from "react";
import Table from "Common/Table/Table";
import css from "./List.module.css";
import ListItems from "./ListItems/ListItems";

const List = ({ sessions }) => {
  return (
    <div className={css.wrapper}>
      <Table>
        <thead>
          <tr>
            <th className={css.center}>Дата</th>
            <th className={css.center}>Тип</th>
            <th className={css.center}>Откуда</th>
            <th className={css.center}>Платформа</th>
          </tr>
        </thead>
        <tbody>
          {!!sessions && sessions.length > 0 && (
            <ListItems sessions={sessions} />
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default List;
