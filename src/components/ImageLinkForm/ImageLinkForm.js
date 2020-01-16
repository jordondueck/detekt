import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div className="form-container">
      <p className="form-title">{"<Title>"}</p>
      <div className="form-content">
        <input
          className="form-input"
          type="text"
          placeholder="Select an image to scan"
        />
        <button className="form-button">{"Detect"}</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
