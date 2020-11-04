import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoriesContainer from "./Categories/CategoriesContainer";
import PriceFromContainer from "./PriceFrom/PriceFromContainer";
import PriceToContainer from "./PriceTo/PriceToContainer";

const Parametrs = ({ isProdDisabled }) => {
  return (
    <div className="d-flex">
      <Link to="/products/all?page=1">
        <Button size="sm" disabled={isProdDisabled}>
          Сбросить
        </Button>
      </Link>
      <CategoriesContainer isProdDisabled={isProdDisabled} />
      <PriceFromContainer isProdDisabled={isProdDisabled} />
      <PriceToContainer isProdDisabled={isProdDisabled} />
    </div>
  );
};

export default Parametrs;
