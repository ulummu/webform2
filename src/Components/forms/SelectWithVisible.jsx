import React from 'react'
import { Form } from "react-bootstrap";
import TextInputFormComponent from './TextInputFormComponent';
import { capitalFirstWord } from '../../helper/FormHelpers';

const SelectWithVisible = ({
    classEffect,
    validasi,  
    name,
    namaTambah,
    label,
    labelTambah,
    value,
    valueTambah,
    visible,
    placeholderTambah,
    optionsTitle,
    options,
    errorText,
    errorTextTambah,
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
          {visible && (
            <TextInputFormComponent
                  classEffect="formTambah mt-3"
                  label={labelTambah}
                  name={namaTambah}
                  value={capitalFirstWord(valueTambah)}
                  placeholder={placeholderTambah}
                  errorText={errorTextTambah}
                  onChange={onChange}
            />
          )}
        <Form.Control.Feedback type="invalid">{errorText}</Form.Control.Feedback>
      </Form.Group>
    );
  };

export default SelectWithVisible