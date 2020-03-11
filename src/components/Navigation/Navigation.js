import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo";

const Navigation = ({ route, isSignedIn, handleRouteChange }) => {
  return (
    <nav className="nav">
      <div className="nav-section">
        <Logo />
      </div>
      <ul className="nav-section nav-title">
        <li>
          <h1>detekt</h1>
        </li>
        <li>
          <h3>Facial Recognition System</h3>
        </li>
      </ul>
      {route === "signin" ? (
        <div className="nav-section">
          <p
            className="nav-item"
            onClick={() => handleRouteChange("registration")}
          >
            Register
          </p>
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
      )}
    </nav>
  );
};

export default Navigation;
