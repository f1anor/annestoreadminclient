import React, { useState } from "react";
import Imgs from "./Imgs";

const ImgsContainer = (props) => {
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);

  return (
    <Imgs
      {...props}
      img2={img2}
      img3={img3}
      setImg2={setImg2}
      setImg3={setImg3}
    />
  );
};

export default ImgsContainer;
