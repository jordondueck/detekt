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
        <li>
          <Logo />
        </li>
        {route === "signin" ? (
          <li>
            <button
              className="nav-item button--text"
              onClick={() => handleRouteChange("registration")}
            >
              Register
            </button>
          </li>
        ) : route === "registration" ? (
          <li>
            <button
              className="nav-item button--text"
              onClick={() => handleRouteChange("signin")}
            >
              Sign In
            </button>
          </li>
        ) : isSignedIn ? (
          <li>
            <button
              className="nav-item button--text"
              onClick={() => handleRouteChange("signin")}
            >
              Sign Out
            </button>
          </li>
        ) : (
          undefined
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
