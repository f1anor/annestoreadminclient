import React from "react";
import { connect } from "react-redux";
import {
  getMetaActive,
  getMetaStars,
  getMetaWait,
  getMetaName,
  getMetaImg,
} from "selectors/comments-selectors";
import Info from "./Info";

const InfoContainer = ({ ...props }) => {
  return <Info {...props} />;
};

const mapStateToProps = (state) => ({
  metaActive: getMetaActive(state),
  metaWait: getMetaWait(state),
  metaStars: getMetaStars(state),
  metaName: getMetaName(state),
  metaImg: getMetaImg(state),
});

export default connect(mapStateToProps, null)(InfoContainer);
