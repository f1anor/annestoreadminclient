import React from "react";
import FormBlock from "Common/FormBlock/FormBlock";
import ProductName from "./ProductName/ProductName";
import Counters from "./Counters/Counters";
import Clear from "./Clear/Clear";
import FiltersContainer from "./Filters/FiltersContainer";
import ClearContainer from "./Clear/ClearContainer";

const Info = ({ metaActive, metaWait, metaStars, metaName, metaImg, id }) => {
  return (
    <FormBlock>
      <ProductName metaName={metaName} metaImg={metaImg} id={id} />
      <Counters metaActive={metaActive} metaWait={metaWait} />
      <FiltersContainer metaStars={metaStars} />
      <ClearContainer />
    </FormBlock>
  );
};

export default Info;
