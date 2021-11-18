import {
  preloadAvatar,
  regNewAdmin,
  returnToThirdStage,
} from "actions/auth-actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isReg } from "selectors/auth-selectors";
import FourthStageForm from "./FourthStageForm";

const FourthStageFormContainer = ({ ...props }) => {
  const dispatch = useDispatch();

  const disabled = useSelector((state) => isReg(state));

  const handleSubmit = (values) => {
    dispatch(regNewAdmin(values));
  };

  const handleReturn = () => {
    dispatch(returnToThirdStage());
  };

  const handlePreloadImage = (img, name) => {
    dispatch(preloadAvatar(img, name));
  };
  return (
    <FourthStageForm
      onSubmit={handleSubmit}
      handleReturn={handleReturn}
      handlePreloadImage={handlePreloadImage}
      disabled={disabled}
    />
  );
};
export default FourthStageFormContainer;
