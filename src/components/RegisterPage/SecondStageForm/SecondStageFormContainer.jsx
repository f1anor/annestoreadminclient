import { checkSecondStage, returnToFirstStage } from "actions/auth-actions";
import React from "react";
import { useDispatch } from "react-redux";
import SecondStageForm from "./SecondStageForm";

const SecondStageFormContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const handleReturn = () => {
    dispatch(returnToFirstStage());
  };

  const handleSubmit = (values) => {
    dispatch(checkSecondStage(values));
  };

  return (
    <SecondStageForm
      onSubmit={handleSubmit}
      handleReturn={handleReturn}
      {...props}
    />
  );
};
export default SecondStageFormContainer;
