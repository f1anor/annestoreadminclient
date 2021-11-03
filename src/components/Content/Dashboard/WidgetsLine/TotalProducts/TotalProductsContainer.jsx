import { fetchProductsForStatistic } from "actions/dashboard-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsForStatistic } from "selectors/dashboard-selectors";
import TotalProducts from "./TotalProducts";

const TotalProductsContainer = ({ ...props }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => getProductsForStatistic(state));
  useEffect(() => {
    dispatch(fetchProductsForStatistic());
  }, [dispatch]);
  return <TotalProducts products={products} />;
};
export default TotalProductsContainer;
