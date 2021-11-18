import { checkFirstStage } from "actions/auth-actions";
import React from "react";
import { useDispatch } from "react-redux";
import FirstStageForm from "./FirstStageForm";

const FirstStageFormConitanier = ({ ...props }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(checkFirstStage(values));
  };
  return <FirstStageForm onSubmit={handleSubmit} {...props} />;
};
export default FirstStageFormConitanier;
