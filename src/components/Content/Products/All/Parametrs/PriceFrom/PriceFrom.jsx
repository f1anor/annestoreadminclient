import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const PriceFrom = ({
  from,
  handleChangeFrom,
  handleSetFromPrice,
  isProdDisabled,
}) => {
  return (
    <InputGroup size="sm" className="ml-2" style={{ width: "300px" }}>
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">Цена: от</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value={from}
        onChange={handleChangeFrom}
      />
      <InputGroup.Append>
        <Button
          disabled={isProdDisabled}
          variant="outline-secondary"
          onClick={handleSetFromPrice}
        >
          Применить
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default PriceFrom;
