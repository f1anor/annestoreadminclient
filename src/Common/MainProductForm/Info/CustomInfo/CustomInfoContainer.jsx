import React, { useState } from "react";
import CustomInfo from "./CustomInfo";

const CustomInfoContainer = () => {
  const [showAdw, setShowAdw] = useState(true);
  const handleSetShowAdw = () => {
    if (!!showAdw) {
      setShowAdw(false);
    } else {
      setShowAdw(true);
    }
  };
  return <CustomInfo handleSetShowAdw={handleSetShowAdw} showAdw={showAdw} />;
};

export default CustomInfoContainer;
