import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const TextInputFormComponent = ({
  name,
  classEffect,
  value,
  label,
  placeholder,
  errorText,
  validasi,
  note,
  onChange,
}) => {
  return (
    <FloatingLabel
      controlId="floatingInput"
      label={label}
      className={classEffect}
    >
      <Form.Control
        name={name}
        value={value}
        onChange={onChange}
        required={validasi}
        type="text"
        placeholder={placeholder}
      />
      <Form.Text muted>
        {note}
      </Form.Text>
      <Form.Control.Feedback type="invalid">{errorText}</Form.Control.Feedback>
    </FloatingLabel>
  );
};

export default TextInputFormComponent;
