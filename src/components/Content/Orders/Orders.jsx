import React from "react";
import { NavLink, Link } from "react-router-dom";
import Title from "Common/Title/Title";
import Layout from "Common/Layout/Layout";
import TabMenu from "Common/TabMenu/TabMenu";
import css from "./Orders.module.css";
import ListContainer from "./List/ListContainer";
import TitleMainBtn from "Common/TitleMainBtn/TitleMainBtn";
import CustomPagination from "Common/CustomPagination/CustomPagination";
import withPageRedirect from "hoc/withPageRedirect";
import TotalCounterContainer from "./TotalCounter/TotalCounterContainer";
import ToolsContainer from "./Tools/ToolsContainer";
import ModalPriceFilterFromContainer from "./ModalPriceFilterFrom/ModalPriceFilterFromContainer";
import ModalPriceFilterToContainer from "./ModalPriceFilterTo/ModalPriceFilterToContainer";
import ModalDeleteContainer from "./ModalDelete/ModalDeleteContainer";
import ModalOrderPreviewContainer from "./ModalOrderPreview/ModalOrderPreviewContainer";

const Orders = ({
  pageSize,
  totalCount,
  pathName,
  isDisabled,
  isEdit,
  img,
  setImg,
  lastParams,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div className={css.titleLine}>
          <Title>Заказы</Title>
          <div className={css.tools}>
            <TitleMainBtn>
              <Link className={css.addLink} to="/addorder">
                Создать
              </Link>
            </TitleMainBtn>
          </div>
        </div>
        <TabMenu>
          <li>
            <NavLink to="/orders/all">Все</NavLink>
          </li>
          <li>
            <NavLink to="/orders/new">Новые</NavLink>
          </li>
          <li>
            <NavLink to="/orders/process">В обработке</NavLink>
          </li>
          <li>
            <NavLink to="/orders/warning">Проблемные</NavLink>
          </li>
          <li>
            <NavLink to="/orders/success">Доставка</NavLink>
          </li>
          <li>
            <NavLink to="/orders/completed">Завершенные</NavLink>
          </li>
        </TabMenu>
      </div>
      <Layout className={css.layout}>
        <ToolsContainer />
        <TotalCounterContainer />
        <ListContainer pageSize={pageSize} />

        <div className={css.pagination}>
          <CustomPagination
            count={pageSize}
            totalCount={totalCount}
            link={pathName}
            disabled={false}
          />
        </div>
      </Layout>
      {/* Модальные окна */}
      <ModalPriceFilterFromContainer />
      <ModalPriceFilterToContainer />
      <ModalDeleteContainer />
      <ModalOrderPreviewContainer />
    </div>
  );
};

export default withPageRedirect(Orders);
