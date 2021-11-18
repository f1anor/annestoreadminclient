import React from "react";
import { useSelector } from "react-redux";
import MainTable from "./MainTable";
import {
  getCommentsById,
  getTotalCount,
  getAnsId,
} from "selectors/comments-selectors";

const MainTableContainer = ({ ...props }) => {
  const ansId = useSelector((state) => getAnsId(state));
  const totalCount = useSelector((state) => getTotalCount(state));
  const comments = useSelector((state) => getCommentsById(state));
  return (
    <MainTable
      ansId={ansId}
      totalCount={totalCount}
      comments={comments}
      {...props}
    />
  );
};

export default MainTableContainer;
