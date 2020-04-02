import React from "react";
import "./ImageLinkForm.css";
import { Button, FormControl, FormGroup } from "react-bootstrap";

const ImageLinkForm = ({ handleInputChange, handleButtonSubmit }) => {
  return (
    <form className="form form--wide">
      <div className="form__content">
      <h2>{"Facial Recognition System"}</h2>
        <FormGroup
          className="form-group--wide form-group--inline form-group--no-msg"
          controlId="imageurl"
        >
          <FormControl
            type="text"
            placeholder="https://example.com/images/example.jpg"
            onChange={handleInputChange}
          />
          <Button
            className="button--ml button--no-outline"
            variant="outline-dark"
            onClick={handleButtonSubmit}
          >
            {"Detect"}
          </Button>
        </FormGroup>
      </div>
    </form>
  );
};

export default ImageLinkForm;
