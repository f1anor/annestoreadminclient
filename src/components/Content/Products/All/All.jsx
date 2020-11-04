import React from "react";
import { Button, Table } from "react-bootstrap";
import css from "./All.module.css";
import List from "./List/List";
import ModalImg from "./ModalImg/ModalImg";
import CustomPagination from "../../../../Common/CustomPagination/CustomPagination";
import TableTitleContainer from "../../../../Common/TableTitle/TableTitleContainer";
import WarningModal from "../../../../Common/WarningModal/WarningModal";
import Parametrs from "./Parametrs/Parametrs";

const All = React.memo(
  ({
    products,
    modalImgShow,
    setModalImgShow,
    modalDelShow,
    setModalDelShow,
    pagesize,
    totalCount,
    sort,
    handleRemoveSelection,
    handleDelete,
    selected,
    isProdDisabled,
  }) => {
    return (
      <div className={css.wrapper}>
        <div className="mt-5">
          <Parametrs isProdDisabled={isProdDisabled} />
        </div>
        <Table striped bordered hover responsive className="mt-3">
          <thead className={css.thead}>
            <tr className="table-active ">
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
          {!!products && (
            <List products={products} setModalShow={setModalImgShow} />
          )}
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
        <ModalImg
          show={!!modalImgShow}
          img={modalImgShow}
          onHide={() => setModalImgShow(null)}
        />
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
