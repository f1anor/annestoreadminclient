import React from "react";
import Title from "Common/Title/Title";
import css from "./Products.module.css";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import AllContainer from "./All/AllContainer";
import Layout from "Common/Layout/Layout";
import TabMenu from "Common/TabMenu/TabMenu";
import ArchiveContainer from "./Archive/ArchiveContainer";
import LayoutWrapper from "Common/LayoutWrapper/LayoutWrapper";
import TitleMainBtn from "Common/TitleMainBtn/TitleMainBtn";
import ModalPriceFilterFromContainer from "./ModalPriceFilterFrom/ModalPriceFilterFromContainer";
import ModalPriceFilterToContainer from "./ModalPriceFilterTo/ModalPriceFilterToContainer";

const Products = React.memo(
  ({ isProdFetching, isArchiveProdFetching, isCatFetching, isDisabled }) => {
    return (
      <LayoutWrapper>
        <Title
          anim={isProdFetching || isCatFetching || isArchiveProdFetching}
          button={
            <Link
              className={[css.addLink, isDisabled ? css.disabled : ""].join(
                " "
              )}
              to="/products/addproduct"
            >
              <TitleMainBtn>Добавить</TitleMainBtn>
            </Link>
          }
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
        <Layout className={css.layout}>
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

        {/* Модальные окна */}
        <ModalPriceFilterFromContainer />
        <ModalPriceFilterToContainer />
      </LayoutWrapper>
    );
  }
);

export default Products;
