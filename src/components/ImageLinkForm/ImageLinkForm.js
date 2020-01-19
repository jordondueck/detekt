import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ handleInputChange, handleButtonSubmit }) => {
  return (
    <div className="form-container">
      <p className="form-title">{"Enter Image URL"}</p>
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
      <p className="form-tip">Note: Larger images take longer to process.</p>
    </div>
  );
};

export default ImageLinkForm;
