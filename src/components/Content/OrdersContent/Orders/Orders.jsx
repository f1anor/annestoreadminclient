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
import ModalOrderManagerNotesContainer from "./ModalOrderManagerNotes/ModalOrderManagerNotesContainer";

const Orders = React.memo(({ pageSize, totalCount, pathName, isDisabled }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div className={css.titleLine}>
          <Title anim={isDisabled}>Заказы</Title>
          <div className={css.tools}>
            <Link
              className={[css.addLink, isDisabled ? css.disabled : ""].join(
                " "
              )}
              to="/orders/addorder"
            >
              <TitleMainBtn>Создать</TitleMainBtn>
            </Link>
          </div>
        </div>
        <TabMenu>
          <li>
            <NavLink
              to="/orders/all"
              className={isDisabled ? css.disabled : ""}
            >
              Все
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders/new"
              className={isDisabled ? css.disabled : ""}
            >
              Новые
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders/process"
              className={isDisabled ? css.disabled : ""}
            >
              В обработке
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders/warning"
              className={isDisabled ? css.disabled : ""}
            >
              Проблемные
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders/delivery"
              className={isDisabled ? css.disabled : ""}
            >
              Доставка
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders/completed"
              className={isDisabled ? css.disabled : ""}
            >
              Завершенные
            </NavLink>
          </li>
        </TabMenu>
      </div>
      <Layout className={css.layout}>
        <ToolsContainer disabled={isDisabled} />
        <TotalCounterContainer disabled={isDisabled} />
        <ListContainer pageSize={pageSize} isDisabled={isDisabled} />

        <div className={css.pagination}>
          <CustomPagination
            count={pageSize}
            totalCount={totalCount}
            link={pathName}
            disabled={isDisabled}
          />
        </div>
      </Layout>

      {/* Модальные окна */}
      <ModalPriceFilterFromContainer />
      <ModalPriceFilterToContainer />
      <ModalDeleteContainer />
      <ModalOrderPreviewContainer />
      <ModalOrderManagerNotesContainer />
    </div>
  );
});

export default withPageRedirect(Orders);