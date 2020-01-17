import React from "react";
import "./FacialRecognitionSystem.css";

const FacialRecognitionSystem = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default FacialRecognitionSystem;
