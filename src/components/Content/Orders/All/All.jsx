import React from "react";
import TypeContainer from "./Type/TypeContainer";

import CustomPagination from "Common/CustomPagination/CustomPagination";
import ListContainer from "./List/ListContainer";
import ModalImg from "../../Products/All/ModalImg/ModalImg";

const All = ({ orders, totalCount, modalImgShow, setModalImgShow }) => {
  return (
    <div>
      <TypeContainer />
      <ListContainer orders={orders} setModalImgShow={setModalImgShow} />
      {totalCount > 10 && (
        <CustomPagination
          count={10}
          totalCount={totalCount}
          link="/orders/all"
        />
      )}
      <ModalImg
        show={!!modalImgShow}
        img={modalImgShow}
        onHide={() => setModalImgShow(null)}
      />
    </div>
  );
};

export default All;
