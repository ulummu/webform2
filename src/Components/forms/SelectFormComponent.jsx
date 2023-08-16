import React from "react";
import { Form } from "react-bootstrap";

const SelectFormComponent = ({
  validasi,
  name,
  classEffect,
  label,
  value,
  optionsTitle,
  options,
  errorText,
  onChange,
}) => {
  return (
    <Form.Group className="mb-2">
      <Form.Label className={classEffect}>{label}</Form.Label>
      <Form.Select name={name} value={value} onChange={onChange} required={validasi}>
        <option value="" hidden>
          {optionsTitle}
        </option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>{option.text}</option>
        ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid">{errorText}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default SelectFormComponent;
