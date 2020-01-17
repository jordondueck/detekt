import React, { useState } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Statistics from "./components/Statistics/Statistics";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

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
  const [input, setInput] = useState('');


  const onInputChange = (event) => {
    console.log('event.target.value' , event.target.value);
  }

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Statistics />
      <ImageLinkForm onInputChange={onInputChange} />
      {/*
      <FacialRecognition />} */}
    </div>
  );
}

export default App;
