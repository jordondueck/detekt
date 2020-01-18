import React, { useState } from "react";
import "./FacialRecognitionSystem.css";

const FacialRecognitionSystem = ({ imageUrl }) => {
  const [imageStatus, setImageStatus] = useState("Loading...");

  const handleImageLoaded = () => {
    setImageStatus("");
  };

  if(imageUrl !== "") {
    return (
      <div className="frs-container">
        <img className="frs-image" onLoad={handleImageLoaded} src={imageUrl}  alt="" />
        <p style={{textAlign: 'center'}}>{imageStatus}</p>
      </div>
    );
  } else {
    return (
      <div className="frs-container">
        
      </div>
    );
  }
};

export default FacialRecognitionSystem;
