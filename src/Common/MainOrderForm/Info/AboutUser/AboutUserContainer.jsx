import React, { useState } from "react";
import AboutUser from "./AboutUser";

const AboutUserContainer = ({ ...props }) => {
  const [showAdw, setShowAdw] = useState(true);

  const handleSetShowAdw = () => {
    if (!!showAdw) {
      setShowAdw(false);
    } else {
      setShowAdw(true);
    }
  };
  return <AboutUser handleSetShowAdw={handleSetShowAdw} showAdw={showAdw} />;
};
export default AboutUserContainer;
