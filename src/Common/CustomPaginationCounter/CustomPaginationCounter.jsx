import React from "react";

import css from "./CustomPaginationCounter.module.css";
import { useQuery } from "../../utils/utils";

const CustomPaginationCounter = ({ pageSize, totalCount, elems }) => {
  const query = useQuery();
  const page = +query.get("page");

  return (
    <div className={css.wrapper}>
      Показано с {pageSize * page - (pageSize - 1)} по{" "}
      {pageSize * page - (pageSize - elems)} из {totalCount}
    </div>
  );
};

export default CustomPaginationCounter;
