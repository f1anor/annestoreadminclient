import React from "react";
import FormBlock from "../../FormBlock/FormBlock";
import CustomInfoContainer from "./CustomInfo/CustomInfoContainer";
import ImgsContainer from "./Imgs/ImgsContainer";
import Info from "./Info/Info";

const Main = ({ preloadImage, form }) => {
  return (
    <FormBlock>
      <Info />
      <ImgsContainer preloadImage={preloadImage} form={form} />
      <CustomInfoContainer />
    </FormBlock>
  );
};

export default Main;
