import React from "react";
import { Form } from "react-bootstrap";
import { Field } from "redux-form";
import ImageLoaderContainer from "../../ImageLoader/ImageLoaderContainer";

const Imgs = () => {
  return (
    <div className="d-flex mt-3">
      <Form.Group className="mr-4">
        <Form.Label>Изображение 1 (Титульное)</Form.Label>
        <Field
          name="img1"
          component={ImageLoaderContainer}
          width={348}
          height={348}
        />
      </Form.Group>
      <Form.Group className="mr-4">
        <Form.Label>Изображение 2</Form.Label>
        <Field
          name="img2"
          component={ImageLoaderContainer}
          width={348}
          height={348}
        />
      </Form.Group>
      <Form.Group className="mr-4">
        <Form.Label>Изображение 3</Form.Label>
        <Field
          name="img3"
          component={ImageLoaderContainer}
          width={348}
          height={348}
        />
      </Form.Group>
    </div>
  );
};

export default Imgs;
