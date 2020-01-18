import React, { useState } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Statistics from "./components/Statistics/Statistics";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FacialRecognitionSystem from "./components/FacialRecognitionSystem/FacialRecognitionSystem";

const app = new Clarifai.App({
  apiKey: "818afbfeeff745cd81ee33c3fe23bc9f"
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 1
      }
    }
  }
};

function App() {
  // const [userInput, setUserInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [boxArea, setBoxArea] = useState("");

  const onInputChange = event => {
    console.log("event.target.value", event.target.value);
    // setUserInput(event.target.value);
    // console.log('userInput' , userInput);
    setImageUrl(event.target.value);
    console.log("imageUrl", imageUrl);
  };

  const onButtonSubmit = () => {
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", imageUrl)
      .then(response => {
        console.log("detekting faces...");
        console.log("Response", response);
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
        displayFaceBox(calculateFaceLocation(response));
      })
      .catch(err => console.log("Error loading image: ", err));
  };

  const calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log('image width' , width);
    console.log('image height' , height);
    return {
      topRow: clarifaiFace.top_row * height,
      leftCol: clarifaiFace.left_col * width,
      bottomRow: height - (clarifaiFace.bottom_row * height),
      rightCol: width - (clarifaiFace.right_col * width)
    }
  };

  const displayFaceBox = (box) => {
    setBoxArea(box);
  }

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Statistics />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FacialRecognitionSystem imageUrl={imageUrl} boxArea={boxArea} />
    </div>
  );
}

export default App;
