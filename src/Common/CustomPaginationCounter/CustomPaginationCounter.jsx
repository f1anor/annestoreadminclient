import React, { Component } from "react";
import { connect } from "react-redux";
import css from "./CustomPaginationCounter.module.css";
import { withRouter } from "react-router-dom";
import { getQuery } from "../../utils/utils";
import { compose } from "redux";

class CustomPaginationCounter extends Component {
  render() {
    const { pageSize, totalCount, elems, page } = this.props;
    return (
      <div className={css.wrapper}>
        Показано с {pageSize * page - (pageSize - 1)} по{" "}
        {pageSize * page - (pageSize - elems)} из {totalCount}
      </div>
    );
  }
}

const mapStateToProps = (ownProps) => {
  const page = ownProps.location ? +getQuery(ownProps.location).get("page") : 1;
  return {
    page,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(CustomPaginationCounter);
