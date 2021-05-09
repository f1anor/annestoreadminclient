import React from "react";
import Title from "../../../Common/Title/Title";

import css from "./Products.module.css";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import AllContainer from "./All/AllContainer";
import Layout from "Common/Layout/Layout";
import TabMenu from "Common/TabMenu/TabMenu";
import ArchiveContainer from "./Archive/ArchiveContainer";

const Products = React.memo(
  ({ isProdFetching, isArchiveProdFetching, isCatFetching }) => {
    return (
      <div className={css.wrapper}>
        <div>
          <Title
            anim={isProdFetching || isCatFetching || isArchiveProdFetching}
          >
            Продукты
          </Title>
          <TabMenu>
            <li>
              <NavLink to="/products/all?page=1">Все</NavLink>
            </li>
            <li>
              <NavLink to="/products/archive?page=1">Архив</NavLink>
            </li>
          </TabMenu>
        </div>
        <Layout>
          <Switch>
            <Route
              path="/products/archive"
              render={() => <ArchiveContainer />}
            />
            <Route
              path="/products/archive"
              render={() => <Redirect to="/products/archive?page=1" />}
            />
            <Route path="/products/all" render={() => <AllContainer />} />
            <Route
              path="/products/"
              render={() => <Redirect to="/products/all?page=1" />}
            />
          </Switch>
        </Layout>
      </div>
    );
  }
);

export default Products;
