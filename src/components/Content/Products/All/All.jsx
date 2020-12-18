import React from "react";
import { Alert, Button, Table } from "react-bootstrap";
import css from "./All.module.css";
import List from "./List/List";
import CustomPagination from "../../../../Common/CustomPagination/CustomPagination";
import TableTitleContainer from "../../../../Common/TableTitle/TableTitleContainer";
import WarningModal from "../../../../Common/WarningModal/WarningModal";
import Parametrs from "./Parametrs/Parametrs";
import SearchContainer from "../../../../Common/Search/SearchContainer";

const All = React.memo(
  ({
    products,
    modalDelShow,
    setModalDelShow,
    pagesize,
    totalCount,
    sort,
    handleRemoveSelection,
    handleDelete,
    selected,
    isProdDisabled,
    message,
    img,
    setImg,
  }) => {
    return (
      <div className={css.wrapper}>
        {!!message && (
          <Alert variant="danger" className="mt-2">
            {message}
          </Alert>
        )}
        <div className="mt-5 d-flex justify-content-between">
          <Parametrs isProdDisabled={isProdDisabled} />
          <SearchContainer />
        </div>
        <Table striped bordered hover responsive className="mt-3">
          <thead className={css.thead}>
            <tr className="table-active">
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
          {!!products && <List products={products} />}
        </Table>

        <div className="d-flex justify-content-between">
          <CustomPagination
            count={pagesize}
            totalCount={totalCount}
            link="/products/all"
            disabled={isProdDisabled}
          />
          <div>
            <Button
              className="mr-2"
              disabled={!selected.length}
              variant="outline-primary"
              onClick={handleRemoveSelection}
            >
              Отменить выбор
            </Button>
            <Button disabled={!selected.length} onClick={setModalDelShow}>
              Удалить выбранное
            </Button>
          </div>
        </div>
        <WarningModal
          show={!!modalDelShow}
          content="Вы действительно хотите удалить выбранные продукты? (Действие является необратимым)"
          handler={() => handleDelete()}
          onHide={() => setModalDelShow(null)}
        />
      </div>
    );
  }
);

export default All;
