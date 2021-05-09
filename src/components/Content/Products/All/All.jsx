import React from "react";
import { Alert } from "react-bootstrap";
import css from "./All.module.css";
import CustomPagination from "Common/CustomPagination/CustomPagination";
import ParametersContainer from "./Parametrs/ParametersContainer";
import ListContainer from "./List/ListContainer";
import CustomPaginationCounter from "Common/CustomPaginationCounter/CustomPaginationCounter";

const All = React.memo(
  ({
    products,
    pageSize,
    totalCount,
    isProdDisabled,
    message,
    isProdFetching,
  }) => {
    return (
      <div className={css.wrapper}>
        {!!message && (
          <Alert variant="danger" className="mt-2">
            {message}
          </Alert>
        )}
        <ParametersContainer isProdDisabled={isProdDisabled} />
        <ListContainer pageSize={pageSize} products={products} />
        <div className={css.pagination}>
          <CustomPaginationCounter
            pageSize={pageSize}
            totalCount={totalCount}
            elems={products.length}
            disabled={isProdFetching}
          />
          <CustomPagination
            count={pageSize}
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
