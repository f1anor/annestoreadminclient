import React from "react";
import { useDispatch } from "react-redux";
import { checkArticle } from "actions/product-actions";
import Find from "./Find";
import { useHistory } from "react-router-dom";

const FindContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCheckArticle = (values) => {
    dispatch(checkArticle(values, history));
  };
  return <Find handleCheckArticle={handleCheckArticle} {...props} />;
};

export default FindContainer;
