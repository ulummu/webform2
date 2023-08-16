import React from 'react'
import { Form } from "react-bootstrap";
const FormTutorial = ({ label, linkTutorial }) => {
  return (
    <Form.Label className="labelTutor">
    {label}{" "}
    <a
      className="tutor"
      href={linkTutorial}
      target="_blank"
      rel="noopener noreferrer"
    >
      Klik Disini
    </a>
  </Form.Label>
    )
}

export default FormTutorial