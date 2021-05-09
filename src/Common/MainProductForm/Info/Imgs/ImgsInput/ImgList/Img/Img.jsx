import React from "react";
import ImgEditorContainer from "./ImgEditor/ImgEditorContainer";
import ImgNoEdit from "./ImgNoEdit/ImgNoEdit";

//TODO: Подключить сюда редактор изображений
const Img = ({ element, ...props }) => {
  const img = `${process.env.REACT_APP_SERVER_ASSETS}${element.preloadImg}`;

  return (
    <>
      {!!element && !!element.noedit ? (
        <ImgNoEdit
          img={img}
          width={process.env.REACT_APP_PRODUCT_IMG_WIDTH}
          height={process.env.REACT_APP_PRODUCT_IMG_HEIGHT}
          {...props}
        />
      ) : (
        <ImgEditorContainer
          img={img}
          width={process.env.REACT_APP_PRODUCT_IMG_WIDTH}
          height={process.env.REACT_APP_PRODUCT_IMG_HEIGHT}
          element={element}
          {...props}
        />
      )}
    </>
  );
};

export default Img;
