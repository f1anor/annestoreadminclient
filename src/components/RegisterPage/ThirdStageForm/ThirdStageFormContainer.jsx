import { checkThirdStage, returnToSecondStage } from "actions/auth-actions";
import React from "react";
import { useDispatch } from "react-redux";
import ThirdStageForm from "./ThirdStageForm";

const ThirdStageFormContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(checkThirdStage(values));
  };

  const handleReturn = () => {
    dispatch(returnToSecondStage());
  };
  return (
    <ThirdStageForm
      onSubmit={handleSubmit}
      handleReturn={handleReturn}
      {...props}
    />
  );
};
export default ThirdStageFormContainer;
