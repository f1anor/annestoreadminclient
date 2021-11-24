import React from "react";
import { connect, useSelector } from "react-redux";
import { getCurrentStage, getIsRegBisy } from "selectors/auth-selectors";
import { preloadAvatar } from "../../actions/auth-actions";
import RegisterPage from "./RegisterPage";

const RegisterPageContainer = (props) => {
  const stage = useSelector((state) => getCurrentStage(state));
  const disabled = useSelector((state) => getIsRegBisy(state));

  return <RegisterPage stage={stage} disabled={disabled} {...props} />;
};

export default connect(null, { preloadAvatar })(RegisterPageContainer);
