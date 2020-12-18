import React from "react";
import { Card, Form } from "react-bootstrap";
import { Field } from "redux-form";
import ImageLoaderContainer from "../../ImageLoader/ImageLoaderContainer";

const Imgs = ({ preloadImage }) => {
  return (
    <Card className="mt-4">
      <Card.Header as="h5">Изображения продукта</Card.Header>
      <Card.Body>
        <div className="d-flex mt-3">
          <Form.Group className="mr-4">
            <Form.Label>Изображение 1 (Титульное)</Form.Label>
            <Field
              name="img1"
              component={ImageLoaderContainer}
              width={348}
              height={348}
              preloadImage={preloadImage}
            />
          </Form.Group>
          <Form.Group className="mr-4">
            <Form.Label>Изображение 2</Form.Label>
            <Field
              name="img2"
              component={ImageLoaderContainer}
              width={348}
              height={348}
              preloadImage={preloadImage}
            />
          </Form.Group>
          <Form.Group className="mr-4">
            <Form.Label>Изображение 3</Form.Label>
            <Field
              name="img3"
              component={ImageLoaderContainer}
              width={348}
              height={348}
              preloadImage={preloadImage}
            />
          </Form.Group>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Imgs;
