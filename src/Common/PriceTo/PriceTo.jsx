import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const PriceTo = ({ to, handleChangeTo, handleSetToPrice, isProdDisabled }) => {
  return (
    <InputGroup size="sm" className="ml-2" style={{ width: "300px" }}>
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">Цена: до</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value={to}
        onChange={handleChangeTo}
      />
      <InputGroup.Append>
        <Button
          disabled={isProdDisabled}
          variant="outline-secondary"
          onClick={handleSetToPrice}
        >
          Применить
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default PriceTo;
