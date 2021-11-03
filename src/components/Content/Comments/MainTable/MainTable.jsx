import React from "react";
import FormBlock from "Common/FormBlock/FormBlock";
import TabMenu from "Common/TabMenu/TabMenu";
import CustomPagination from "Common/CustomPagination/CustomPagination";
import { NavLink, useLocation } from "react-router-dom";
import css from "./MainTable.module.css";
import { getQuery } from "utils/utils";
import ListItemContainer from "./ListItem/ListItemContainer";
import NewContainer from "./New/NewContainer";
import Empty from "./Empty/Empty";

const MainTable = ({ comments, id, totalCount, ansId, isDisabled }) => {
  const location = useLocation();
  return (
    <div className={css.wrapper}>
      <TabMenu className={css.tabMenu}>
        <li>
          <NavLink
            to={`${location.pathname}?page=1`}
            isActive={(match, location) => {
              return !getQuery(location).get("type");
            }}
          >
            Все
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${location.pathname}?page=1&type=pending`}
            isActive={(match, location) => {
              return getQuery(location).get("type") === "pending";
            }}
          >
            Модерация
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${location.pathname}?page=1&type=published`}
            isActive={(match, location) => {
              return getQuery(location).get("type") === "published";
            }}
          >
            Опубликованы
          </NavLink>
        </li>
      </TabMenu>
      <FormBlock className={css.formBlock}>
        <div className={css.content}>
          {comments.length > 0 ? (
            <>
              <div className={css.list}>
                {comments.map((comment) => (
                  <ListItemContainer
                    key={comment._id}
                    comment={comment}
                    id={id}
                  />
                ))}
              </div>
              <div className={css.paginationWrapper}>
                <CustomPagination
                  count={10}
                  totalCount={totalCount}
                  link={`/comments/${id || ""}`}
                  disabled={isDisabled}
                />
              </div>
            </>
          ) : (
            <Empty />
          )}

          {!!id && !ansId && <NewContainer id={id} isDisabled={isDisabled} />}
        </div>
      </FormBlock>
    </div>
  );
};

export default MainTable;
