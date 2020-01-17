import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="form-container">
      <p className="form-title">{"Enter Image URL"}</p>
      <div className="form-content">
        <input
          className="form-input"
          type="text"
          placeholder="https://example.com/images/example"
          onChange={onInputChange}
        />
        <button className="form-button" onClick={onButtonSubmit}>{"Detect"}</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
