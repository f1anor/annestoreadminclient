import React from "react";
import { connect } from "react-redux";
import { checkArticle } from "actions/product-actions";
import Find from "./Find";
import { useHistory } from "react-router-dom";

const FindContainer = ({ checkArticle, ...props }) => {
  const history = useHistory();
  const handleCheckArticle = (values) => {
    checkArticle(values, history);
  };
  return <Find handleCheckArticle={handleCheckArticle} {...props} />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { checkArticle })(FindContainer);
