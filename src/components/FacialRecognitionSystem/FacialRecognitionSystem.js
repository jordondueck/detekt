import React, { useState } from "react";
import "./FacialRecognitionSystem.css";

const FacialRecognitionSystem = ({ imageUrl, boxArea }) => {
  const [imageStatus, setImageStatus] = useState("Loading...");

  const handleImageLoaded = () => {
    setImageStatus("");
  };

  if (imageUrl !== "") {
    console.log("boxArea", boxArea);
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
          <div
            className="frs--bounding-box"
            style={{
              top: boxArea.topRow,
              left: boxArea.leftCol,
              bottom: boxArea.bottomRow,
              right: boxArea.rightCol
            }}
          ></div>
          <p style={{ textAlign: "center" }}>{imageStatus}</p>
        </div>
      </div>
    );
  } else {
    return <div className="frs--container"></div>;
  }
};

export default FacialRecognitionSystem;
