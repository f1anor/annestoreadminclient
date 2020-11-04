import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import CatContainer from "./Cat/CatContainer";

const CatList = ({ cat }) => {
  return (
    <>
      <Card className="w-100 h-100 overflow-auto">
        <Card.Body>
          <ListGroup variant="flush">
            {cat.map((item) => (
              <CatContainer key={item.number} item={item} />
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default CatList;
