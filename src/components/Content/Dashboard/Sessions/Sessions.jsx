import AnimatedCard from "Common/AnimatedCard/AnimatedCard";
import CardTitle from "Common/CardTitle/CardTitle";
import CustomPagination from "Common/CustomPagination/CustomPagination";
import React from "react";
import List from "./List/List";
import css from "./Sessions.module.css";

const Sessions = React.memo(
  ({ sessions, totalCount, pathName, isFetching }) => {
    return (
      <AnimatedCard className={css.wrapper}>
        <CardTitle className={css.title}>Сессии</CardTitle>
        <List sessions={sessions} />
        <div className={css.pagination}>
          <CustomPagination
            count={4}
            totalCount={totalCount}
            link={pathName}
            disabled={!!isFetching}
          />
        </div>
      </AnimatedCard>
    );
  }
);

export default Sessions;
