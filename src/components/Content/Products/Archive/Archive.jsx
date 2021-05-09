import React from "react";
import ListContainer from "./List/ListContainer";
import ParametersContainer from "./Parameters/ParametersContainer";
import css from "./Archive.module.css";
import CustomPagination from "../../../../Common/CustomPagination/CustomPagination";
import CustomPaginationCounter from "../../../../Common/CustomPaginationCounter/CustomPaginationCounter";

const Archive = React.memo(({ products, totalCount, pageSize }) => {
  return (
    <div>
      <ParametersContainer />
      <ListContainer products={products} />
      <div className={css.pagination}>
        <CustomPaginationCounter
          pageSize={pageSize}
          totalCount={totalCount}
          elems={products.length}
          // disabled={isProdFetching}
        />
        <CustomPagination
          count={pageSize}
          totalCount={totalCount}
          link="/products/archive"
          // disabled={isProdDisabled}
        />
      </div>
    </div>
  );
});

export default Archive;
