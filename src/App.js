import React, { useState } from "react";
import "./App.css";
// import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Registration from "./components/Registration/Registration";
import Statistics from "./components/Statistics/Statistics";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FacialRecognitionSystem from "./components/FacialRecognitionSystem/FacialRecognitionSystem";

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 45,
//       // density: {
//       //   enable: true,
//       //   value_area: 800
//       // }
//     },
//     size: {
//       value: 3
//     },
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         blur: 1
//       }
//     }
//   }
// };

function App() {
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [boxAreas, setBoxAreas] = useState([{}]);
  const [user, setUser] = useState([{}]);

  fetch("https://salty-mesa-37106.herokuapp.com/", {
    method: "get",
    headers: { "Content-Type": "application/json" }
  }).catch(console.log);

  const setDefaultState = () => {
    setIsSignedIn(false);
    setImageUrl("");
    setBoxAreas([{}]);
    setUser([{}]);
  };

  const handleSignIn = requestingUser => {
    setUser(requestingUser);
    setIsSignedIn(true);
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
    fetch("https://salty-mesa-37106.herokuapp.com/clarifai", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageUrl: imageUrl
      })
    })
      .then(response => response.json())
      .then(response => {
        fetch("https://salty-mesa-37106.herokuapp.com/image", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            itemsdetected: response.outputs[0].data.regions.length,
            accountid: user.accountid
          })
        }).catch(console.log);
        displayFaceBoxes(calculateFaceLocations(response));
      })
      .catch(err => console.log("Error loading image: ", err));
  };

  const calculateFaceLocations = data => {
    const clarifaiFaces = data.outputs[0].data.regions.map(faceRegion => {
      return faceRegion.region_info.bounding_box;
    });
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return clarifaiFaces.map(clarifaiFace => {
      return {
        topRow: clarifaiFace.top_row * height,
        leftCol: clarifaiFace.left_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
        rightCol: width - clarifaiFace.right_col * width
      };
    });
  };

  const displayFaceBoxes = boxes => {
    setBoxAreas(boxes);
  };

  return (
    <div className="App">
      {/* <Particles className="particles" params={particlesOptions} /> */}
      <Navigation
        route={route}
        handleRouteChange={handleRouteChange}
        isSignedIn={isSignedIn}
      />
      {route === "signin" ? (
        <section className="container">
        <SignIn
          handleRouteChange={handleRouteChange}
          handleSignIn={handleSignIn}
        />
        </section>
      ) : route === "registration" ? (
        <section className="container">
        <Registration handleRouteChange={handleRouteChange} />
        </section>
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
