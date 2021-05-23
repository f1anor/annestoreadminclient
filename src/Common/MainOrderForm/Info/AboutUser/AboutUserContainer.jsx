import React, { useState } from "react";
import AboutUser from "./AboutUser";

const AboutUserContainer = ({ formName, ...props }) => {
  const [showAdw, setShowAdw] = useState(true);

  const handleSetShowAdw = () => {
    if (!!showAdw) {
      setShowAdw(false);
    } else {
      setShowAdw(true);
    }
  };

  return (
    <AboutUser
      handleSetShowAdw={handleSetShowAdw}
      showAdw={showAdw}
      formName={formName}
    />
  );
};
export default AboutUserContainer;
