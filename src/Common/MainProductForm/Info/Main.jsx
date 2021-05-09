import React from "react";
import { Alert } from "react-bootstrap";
import FormBlock from "../../FormBlock/FormBlock";
import CustomInfoContainer from "./CustomInfo/CustomInfoContainer";
import ImgsContainer from "./Imgs/ImgsContainer";
import Info from "./Info/Info";

const Main = ({ preloadImage, form, error }) => {
  return (
    <FormBlock>
      {!!error && (
        <Alert variant="danger" className="mt-2">
          {error}
        </Alert>
      )}
      <Info />
      <ImgsContainer preloadImage={preloadImage} form={form} />
      <CustomInfoContainer />
    </FormBlock>
  );
};

export default Main;
