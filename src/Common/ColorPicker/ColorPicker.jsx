import React from "react";
import { Form } from "react-bootstrap";
import css from "./ColorPicker.module.css";

const ColorPicker = ({ label, input, handleColorChange }) => {
  const { value } = input;
  return (
    <Form.Group>
      {!!label && <Form.Label>{label}</Form.Label>}
      <div className={css.wrapper} onClick={handleColorChange}>
        <div className={css.row}>
          <div
            className={css.clear}
            style={{
              backgroundColor: "white",
              boxSizing: "border-box",
              border: "1px solid #cfd4d9",
            }}
            data-color={false}
          >
            &times;
          </div>
          <div
            className={[css.color, value === "White" ? css.active : ""].join(
              " "
            )}
            style={{
              backgroundColor: "White",
              boxSizing: "border-box",
              border: "1px solid #cfd4d9",
            }}
            data-color="White"
          />
        </div>
        <div className={css.row}>
          <div
            className={[css.color, value === "Gray" ? css.active : ""].join(
              " "
            )}
            style={{
              backgroundColor: "Gray",
            }}
            data-color="Gray"
          />
          <div
            className={[css.color, value === "Black" ? css.active : ""].join(
              " "
            )}
            style={{ backgroundColor: "Black" }}
            data-color="Black"
          />
        </div>
        <div className={css.row}>
          <div
            className={[css.color, value === "Fuchsia" ? css.active : ""].join(
              " "
            )}
            style={{
              backgroundColor: "Fuchsia",
            }}
            data-color="Fuchsia"
          />
          <div
            className={[css.color, value === "Purple" ? css.active : ""].join(
              " "
            )}
            style={{ backgroundColor: "Purple" }}
            data-color="Purple"
          />
        </div>
        <div className={css.row}>
          <div
            className={[css.color, value === "Red" ? css.active : ""].join(" ")}
            style={{
              backgroundColor: "Red",
            }}
            data-color="Red"
          />
          <div
            className={[css.color, value === "Brown" ? css.active : ""].join(
              " "
            )}
            style={{ backgroundColor: "Brown" }}
            data-color="Brown"
          />
        </div>
        <div className={css.row}>
          <div
            className={[css.color, value === "Yellow" ? css.active : ""].join(
              " "
            )}
            style={{
              backgroundColor: "Yellow",
            }}
            data-color="Yellow"
          />
          <div
            className={[css.color, value === "Orange" ? css.active : ""].join(
              " "
            )}
            style={{ backgroundColor: "Orange" }}
            data-color="Orange"
          />
        </div>
        <div className={css.row}>
          <div
            className={[css.color, value === "Lime" ? css.active : ""].join(
              " "
            )}
            style={{
              backgroundColor: "Lime",
            }}
            data-color="Lime"
          />
          <div
            className={[css.color, value === "Green" ? css.active : ""].join(
              " "
            )}
            style={{ backgroundColor: "Green" }}
            data-color="Green"
          />
        </div>
        <div className={css.row}>
          <div
            className={[css.color, value === "Aqua" ? css.active : ""].join(
              " "
            )}
            style={{
              backgroundColor: "Aqua",
            }}
            data-color="Aqua"
          />
          <div
            className={[css.color, value === "Teal" ? css.active : ""].join(
              " "
            )}
            style={{ backgroundColor: "Teal" }}
            data-color="Teal"
          />
        </div>
        <div className={css.row}>
          <div
            className={[css.color, value === "Blue" ? css.active : ""].join(
              " "
            )}
            style={{
              backgroundColor: "Blue",
            }}
            data-color="Blue"
          />
          <div
            className={[css.color, value === "Navy" ? css.active : ""].join(
              " "
            )}
            style={{ backgroundColor: "Navy" }}
            data-color="Navy"
          />
        </div>
      </div>
    </Form.Group>
  );
};

export default ColorPicker;
