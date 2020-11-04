import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import withFilters from "../../../../../../hoc/withFilters";
import PriceFrom from "./PriceFrom";

const PriceFromContainer = ({ query, filters, ...props }) => {
  const history = useHistory();
  const [from, changeFrom] = useState(
    (!!filters.price && filters.price["$gt"]) || ""
  );

  useEffect(() => {
    if (!filters.price || !filters.price["$gt"]) changeFrom("");
  }, [filters]);

  const handleChangeFrom = (e) => {
    const target = e.target;
    changeFrom(target.value);
  };

  const handleSetFromPrice = () => {
    const f = { ...filters };
    f.price && f.price["$gt"] && delete f.price["$gt"];
    if (!from) {
      if (f.price && !f.price["$lt"]) delete f.price;
    } else {
      if (!f.price) f.price = {};
      f.price["$gt"] = +from;
    }

    query.set("filter", JSON.stringify(f));
    history.push(`/products/all?${query.toString()}`);
  };
  return (
    <PriceFrom
      handleChangeFrom={handleChangeFrom}
      handleSetFromPrice={handleSetFromPrice}
      from={from}
      {...props}
    />
  );
};

export default withFilters(PriceFromContainer);
