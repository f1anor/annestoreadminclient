import React from "react";
import { Col, Row } from "react-bootstrap";
import { Field } from "redux-form";

import ProductTableInputContainer from "../ProductsTableInput/ProductTableInputContainer";
import AboutUser from "./AboutUser/AboutUser";
import ManagerNotesContainer from "./ManagerNotes/ManagerNotesContainer";
import PaymentContainer from "./Payment/PaymentContainer";
import UserNotes from "./UserNotes/UserNotes";

import { productsRequired } from "utils/validators";

const MainOrderForm = ({ formName, editMode }) => {
  return (
    <>
      <Field
        name="products"
        component={ProductTableInputContainer}
        validate={[productsRequired]}
        editMode={editMode}
      />
      <Row className="mt-4">
        <Col>
          <AboutUser editMode={editMode} />
        </Col>
        <Col>
          <PaymentContainer formName={formName} />
        </Col>
      </Row>
      <UserNotes />
      <Field
        name="managerNotes"
        component={ManagerNotesContainer}
        editMode={editMode}
      />
    </>
  );
};

export default MainOrderForm;
