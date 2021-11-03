import React from "react";
import css from "./All.module.css";
import CustomPagination from "Common/CustomPagination/CustomPagination";
import ListContainer from "./List/ListContainer";
import ToolsContainer from "./Tools/ToolsContainer";
import ModalAllProductstoArchiveContainer from "./ModalAllProductsToArchive/ModalAllProductstoArchiveContainer";
import InfoLineContainer from "./InfoLine/InfoLineContainer";

const All = React.memo(({ products, pageSize, totalCount, isProdDisabled }) => {
  return (
    <>
      <ToolsContainer isProdDisabled={isProdDisabled} />
      <InfoLineContainer
        totalCount={totalCount}
        isProdDisabled={isProdDisabled}
      />
      <ListContainer pageSize={pageSize} products={products} />
      <div className={css.pagination}>
        <CustomPagination
          count={pageSize}
          totalCount={totalCount}
          link="/products/all"
          disabled={isProdDisabled}
        />
      </div>
      {/* Модальные окна */}
      <ModalAllProductstoArchiveContainer />
    </>
  );
});

export default All;
