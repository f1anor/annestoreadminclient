import React from "react";
import { Alert, Table } from "react-bootstrap";
import css from "./All.module.css";
import List from "./List/List";
import CustomPagination from "../../../../Common/CustomPagination/CustomPagination";
import TableTitleContainer from "../../../../Common/TableTitle/TableTitleContainer";
import SearchContainer from "../../../../Common/Search/SearchContainer";
import ParametersContainer from "./Parametrs/ParametersContainer";

const All = React.memo(
  ({
    products,
    pagesize,
    totalCount,
    sort,
    isProdDisabled,
    message,
    moveToArchive,
  }) => {
    return (
      <div className={css.wrapper}>
        {!!message && (
          <Alert variant="danger" className="mt-2">
            {message}
          </Alert>
        )}
        <div className="d-flex justify-content-between">
          <SearchContainer />
          <ParametersContainer
            isProdDisabled={isProdDisabled}
            moveToArchive={moveToArchive}
          />
        </div>
        <Table hover responsive className={css.table}>
          <thead className={css.thead}>
            <tr>
              <th className={css.check}>Выбрать</th>
              <TableTitleContainer
                disabled={!!isProdDisabled}
                sort={sort.time}
                content="Время"
              />
              <TableTitleContainer
                disabled={!!isProdDisabled}
                sort={sort.article}
                content="Артикуль"
              />
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
              <th>Изображения</th>
              <TableTitleContainer
                disabled={!!isProdDisabled}
                sort={sort.price}
                content="Цена"
              />
            </tr>
          </thead>
          <List products={products} />
        </Table>

        <div className="d-flex justify-content-between">
          <CustomPagination
            count={pagesize}
            totalCount={totalCount}
            link="/products/all"
            disabled={isProdDisabled}
          />
        </div>
      </div>
    );
  }
);

export default All;
