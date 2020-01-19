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
        <p
        className="nav-section nav-item"
        onClick={() => handleRouteChange("registration")}
      >
        Register
      </p>
      ) : route === "registration" ? (
        <p
          className="nav-section nav-item"
          onClick={() => handleRouteChange("signin")}
        >
          Sign In
        </p>
      ) : isSignedIn ? (
        <p
          className="nav-section nav-item"
          onClick={() => handleRouteChange("signin")}
        >
          Sign Out
        </p>
      ) : undefined}
    </nav>
  );
};

export default Navigation;
