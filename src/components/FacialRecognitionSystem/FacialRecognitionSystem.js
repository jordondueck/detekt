import React, { useState } from "react";
import "./FacialRecognitionSystem.css";
import BoundingBox from "../BoundingBox/BoundingBox";

const FacialRecognitionSystem = ({ imageUrl, boxAreas }) => {
  const [imageStatus, setImageStatus] = useState("Loading...");

  const handleImageLoaded = () => {
    setImageStatus("");
  };

  if (imageUrl !== "") {
    console.log("boxAreas", boxAreas);
    return (
      <div className="frs--container">
        <div className="frs--container-inner">
          <img
            className="frs--image"
            id="inputImage"
            onLoad={handleImageLoaded}
            src={imageUrl}
            alt=""
          />
          <BoundingBox boxAreas={boxAreas} />
          <p style={{ textAlign: "center" }}>{imageStatus}</p>
        </div>
      </div>
    );
  } else {
    return <div className="frs--container"></div>;
  }
};

export default FacialRecognitionSystem;
