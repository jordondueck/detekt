import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange }) => {
  return (
    <div className="form-container">
      <p className="form-title">{"<Title>"}</p>
      <div className="form-content">
        <input
          className="form-input"
          type="text"
          placeholder="Enter URL of image"
          onChange={onInputChange}
        />
        <button className="form-button">{"Detect"}</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
