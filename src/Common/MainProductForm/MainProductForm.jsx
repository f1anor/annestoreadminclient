import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Imgs from "./Imgs/Imgs";
import MainInfo from "./MainInfo/MainInfo";
import Composition from "./Composition/Composition";
import OtherParameters from "./OtherParameters/OtherParameters";
import Price from "./Price/Price";

const MainProductForm = ({ catForForm, preloadImage }) => {
  return (
    <>
      <Form.Group className="mt-5" controlId="title">
        <Row>
          <Col md={9}>
            <MainInfo />
            <Row className="d-flex justify-content-between mt-4">
              <Col md={6}>
                <Composition />
              </Col>
              <Col md={6}>
                <OtherParameters />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Price catForForm={catForForm} />
          </Col>
        </Row>
        <Imgs preloadImage={preloadImage} />
        <Form.Control.Feedback type="invalid">
          {/* {errors.city} */}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default MainProductForm;
