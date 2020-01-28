import React, { useState } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Registration from "./components/Registration/Registration";
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
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [boxAreas, setBoxAreas] = useState([{}]);
  const [user, setUser] = useState([{}]);

  const setDefaultState = () => {
    setIsSignedIn(false);
    setImageUrl("");
    setBoxAreas([{}]);
    setUser([{}]);
  };

  const handleSignIn = requestingUser => {
    console.log("requestingUser", requestingUser);
    setUser(requestingUser);
    setIsSignedIn(true);
  };

  const handleRegister = () => {
    // TO DO: User validation + database insert
  };

  const handleRouteChange = requestedRoute => {
    if (requestedRoute !== "home") {
      setDefaultState();
    }
    setRoute(requestedRoute);
  };

  const handleInputChange = event => {
    setBoxAreas([{}]);
    setImageUrl(event.target.value);
  };

  const handleButtonSubmit = () => {
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", imageUrl)
      .then(response => {
        console.log('itemsdetected' , response.outputs[0].data.regions.length);
        console.log('accountid' , user.accountid);
        fetch("http://localhost:3000/image", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            itemsdetected: response.outputs[0].data.regions.length,
            accountid: user.accountid
          })
        })
        .catch(console.log);
        // console.log("detekting faces...");
        console.log("handleButtonSubmit response", response);
        displayFaceBoxes(calculateFaceLocations(response));
      })
      .catch(err => console.log("Error loading image: ", err));
  };

  const calculateFaceLocations = data => {
    // console.log("mapRegions", data);
    const clarifaiFaces = data.outputs[0].data.regions.map(faceRegion => {
      return faceRegion.region_info.bounding_box;
    });
    // console.log("clarifaiFaces", clarifaiFaces);
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return clarifaiFaces.map(clarifaiFace => {
      // console.log("clarifaiFace", clarifaiFace);
      return {
        topRow: clarifaiFace.top_row * height,
        leftCol: clarifaiFace.left_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
        rightCol: width - clarifaiFace.right_col * width
      };
    });
  };

  const displayFaceBoxes = boxes => {
    // console.log("boxes", boxes);
    setBoxAreas(boxes);
  };

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation
        route={route}
        handleRouteChange={handleRouteChange}
        isSignedIn={isSignedIn}
      />
      {route === "signin" ? (
        <SignIn
          handleRouteChange={handleRouteChange}
          handleSignIn={handleSignIn}
        />
      ) : route === "registration" ? (
        <Registration handleRouteChange={handleRouteChange} />
      ) : (
        <section>
          <Statistics />
          <ImageLinkForm
            handleInputChange={handleInputChange}
            handleButtonSubmit={handleButtonSubmit}
          />
          <FacialRecognitionSystem imageUrl={imageUrl} boxAreas={boxAreas} />
        </section>
      )}
    </div>
  );
}

export default App;
