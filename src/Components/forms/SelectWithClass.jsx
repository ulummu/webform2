import React from 'react'
import { Form } from "react-bootstrap";
const SelectWithClass = ({
    validasi,  
    name,
    classEffect,
    value,
    optionsTitle,
    options,
    errorText,
    onChange,
}) => {
  return (
    <>
    <Form.Select className={classEffect} name={name} value={value} onChange={onChange} required={validasi}>
        <option value="" hidden>
          {optionsTitle}
        </option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>{option.text}</option>
        ))}
    </Form.Select>
    <Form.Control.Feedback type="invalid">{errorText}</Form.Control.Feedback>
    </>
  )
}

export default SelectWithClass