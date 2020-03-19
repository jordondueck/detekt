import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ handleInputChange, handleButtonSubmit }) => {
  return (
    <div className="form-container">
      <h3 className="title title--small">{"Enter Image URL"}</h3>
      <div className="form-content">
        <input
          className="form-input"
          type="text"
          placeholder="https://example.com/images/example.jpg"
          onChange={handleInputChange}
        />
        <button className="form-button" onClick={handleButtonSubmit}>
          {"Detect"}
        </button>
      </div>
      <p className="text__tip text--small">Note: Large images take longer to process.</p>
    </div>
  );
};

export default ImageLinkForm;
