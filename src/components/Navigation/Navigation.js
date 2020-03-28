import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo";
import {
  Button,
  FormControl,
  FormGroup
  // FormLabel
} from "react-bootstrap";

const Navigation = ({ route, isSignedIn, handleRouteChange }) => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-section">
          <Logo />
        </li>
        {/* <li className="nav-section>">
          Detekt
        </li> */}
        {route === "signin" ? (
        <li className="nav-section">
          <button
            className="nav-item button--text"
            // variant="outline-dark"
            onClick={() => handleRouteChange("registration")}
          >
            Register
          </button>
        </li>
      ) : route === "registration" ? (
        <div className="nav-section">
          <p className="nav-item" onClick={() => handleRouteChange("signin")}>
            Sign In
          </p>
        </div>
      ) : isSignedIn ? (
        <div className="nav-section">
          <p className="nav-item" onClick={() => handleRouteChange("signin")}>
            Sign Out
          </p>
        </div>
      ) : (
        undefined
      )}
      </ul>


      {/* <div className="nav-section">
        <Logo />
      </div>
      <ul className="nav-section nav-title">
        <li>
          <h1 className="title title--big">detekt</h1>
        </li>
        <li>
          <h3 className="title title--small">Facial Recognition System</h3>
        </li>
      </ul>
      {route === "signin" ? (
        <div className="nav-section">
          <Button
            className="nav-item"
            variant="outline-dark"
            onClick={() => handleRouteChange("registration")}
          >
            Register
          </Button>
        </div>
      ) : route === "registration" ? (
        <div className="nav-section">
          <p className="nav-item" onClick={() => handleRouteChange("signin")}>
            Sign In
          </p>
        </div>
      ) : isSignedIn ? (
        <div className="nav-section">
          <p className="nav-item" onClick={() => handleRouteChange("signin")}>
            Sign Out
          </p>
        </div>
      ) : (
        undefined
      )} */}
    </nav>
  );
};

export default Navigation;
