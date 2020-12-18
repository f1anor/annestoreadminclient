import React from "react";
import TypeContainer from "./Type/TypeContainer";

import CustomPagination from "Common/CustomPagination/CustomPagination";
import ListContainer from "./List/ListContainer";
import TextModal from "Common/TextModal/TextModal";
import SearchContainer from "../../../../Common/Search/SearchContainer";

const All = ({ orders, totalCount, clearNote, note, isDisabled }) => {
  return (
    <div>
      <div className="mt-5 d-flex justify-content-between">
        <TypeContainer />
        <SearchContainer />
      </div>
      <ListContainer orders={orders} />
      <CustomPagination
        count={10}
        totalCount={totalCount}
        link="/orders/all"
        disabled={isDisabled}
      />
      <TextModal content={note} onHide={clearNote} show={!!note} />
    </div>
  );
};

export default All;
