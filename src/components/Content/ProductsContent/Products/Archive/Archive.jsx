import React from "react";
import ListContainer from "./List/ListContainer";
import InfoLineContainer from "./InfoLine/InfoLineContainer";
import css from "./Archive.module.css";
import CustomPagination from "Common/CustomPagination/CustomPagination";
import ModalArchiveProductsDeleteContainer from "./ModalArchiveProductsDelete/ModalArchiveProductsDeleteContainer";
import ModalArchiveProductsRestoreContainer from "./ModalArchiveProductsRestore/ModalArchiveProductsRestoreContainer";

const Archive = React.memo(
  ({ products, totalCount, pageSize, isProdDisabled }) => {
    return (
      <div>
        <InfoLineContainer />
        <ListContainer products={products} />
        <div className={css.pagination}>
          <CustomPagination
            count={pageSize}
            totalCount={totalCount}
            link="/products/archive"
            disabled={isProdDisabled}
          />
        </div>
        {/* Модальные окна */}
        <ModalArchiveProductsDeleteContainer />
        <ModalArchiveProductsRestoreContainer />
      </div>
    );
  }
);

export default Archive;
