import React from "react";
import "./ImageLinkForm.css";
import {
  Button,
  FormControl,
  FormGroup
  // FormLabel
} from "react-bootstrap";

const ImageLinkForm = ({ handleInputChange, handleButtonSubmit }) => {
  return (
    <form className="form form--wide">
      <h3 className="title title--small">{"Enter Image URL"}</h3>
      <section className="form__content">
      <FormGroup className="form-group--wide form-group--inline form-group--no-msg" controlId="imageurl">
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
      </section>
      {/* <p className="text__tip text--small">
        Note: Large images take longer to process.
      </p> */}
    </form>
  );
};

export default ImageLinkForm;
