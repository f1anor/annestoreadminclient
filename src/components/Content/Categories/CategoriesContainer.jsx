import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setModalNew } from "actions/cat-actions";
import {
  getIsBisy,
  getActiveCat,
  getPassiveCat,
} from "selectors/cat-selectors";
import Categories from "./Categories";
import { useQuery } from "utils/utils";

const CategoriesContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const query = useQuery().toString();

  const isBisy = useSelector((state) => getIsBisy(state));
  const activeCat = useSelector((state) => getActiveCat(state));
  const passiveCat = useSelector((state) => getPassiveCat(state));

  // Загружаем категории
  useEffect(() => {
    dispatch(fetchCategories(query));
  }, [dispatch, query]);

  const handleNewModalOpen = () => {
    dispatch(setModalNew(true));
  };

  return (
    <Categories
      isBisy={isBisy}
      activeCat={activeCat}
      passiveCat={passiveCat}
      handleNewModalOpen={handleNewModalOpen}
      {...props}
    />
  );
};

export default CategoriesContainer;
