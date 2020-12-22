import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import withFilters from "hoc/withFilters";
import PriceTo from "./PriceTo";

const PriceToContainer = ({ query, filters, ...props }) => {
  const history = useHistory();
  const [to, changeTo] = useState(
    (!!filters.price && filters.price["$lt"]) || ""
  );

  useEffect(() => {
    if (!filters.price || !filters.price["$lt"]) changeTo("");
  }, [filters]);

  const handleChangeTo = (e) => {
    const target = e.target;
    changeTo(target.value);
  };

  const handleSetToPrice = () => {
    const f = { ...filters };
    f.price && f.price["$lt"] && delete f.price["$lt"];
    if (!to) {
      if (f.price && !f.price["$gt"]) delete f.price;
    } else {
      if (!f.price) f.price = {};
      f.price["$lt"] = +to;
    }

    query.set("filter", JSON.stringify(f));
    history.push(`/products/all?${query.toString()}`);
  };
  return (
    <PriceTo
      handleChangeTo={handleChangeTo}
      to={to}
      handleSetToPrice={handleSetToPrice}
      {...props}
    />
  );
};

export default withFilters(PriceToContainer);
