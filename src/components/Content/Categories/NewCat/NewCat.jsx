import React from "react";
import { InputGroup, FormControl, Button, Spinner } from "react-bootstrap";

const NewCat = ({
  value,
  handleChange,
  handleAddCat,
  isAdding,
  isCatDisabled,
}) => {
  return (
    <InputGroup className="mb-3 w-100 mt-3" size="md">
      <InputGroup.Prepend>
        <Button
          variant="primary"
          onClick={handleAddCat}
          disabled={!!isCatDisabled}
        >
          <div style={{ width: "100px" }}>
            {!isAdding ? (
              "Добавить"
            ) : (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
          </div>
        </Button>
      </InputGroup.Prepend>
      <FormControl
        value={value}
        onChange={handleChange}
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
};

export default NewCat;
