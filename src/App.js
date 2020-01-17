import React, { useState } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Statistics from "./components/Statistics/Statistics";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

const app = new Clarifai.App({
  apiKey: '818afbfeeff745cd81ee33c3fe23bc9f'
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
  const [input, setInput] = useState("");

  const onInputChange = event => {
    console.log("event.target.value", event.target.value);
  };

  const onButtonSubmit = () => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log("URL submitted. detekting faces.");
      console.log('Response' , response);
    },
    function(err) {
      console.log("Error loading image.")
    }
  );
  };

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Statistics />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      {/*
      <FacialRecognition />} */}
    </div>
  );
}

export default App;
