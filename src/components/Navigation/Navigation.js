import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import logo from "../Logo/logo_text.png";
import "./Navigation.css";

const StyledButton = styled(Button)`
  padding: 0;
  &:hover {
    background-color: transparent;
  }
`;

const Navigation = ({ route, isSignedIn, handleRouteChange }) => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <img className="logo__text" src={logo} alt="detekt logo" />
        </li>
        {route === "signin" ? (
          <li>
            <Button
              color="default"
              className="button"
              onClick={() => handleRouteChange("registration")}
            >
              Register
            </Button>
          </li>
        ) : route === "registration" ? (
          <li>
            <Button
              color="default"
              className="button"
              onClick={() => handleRouteChange("signin")}
            >
              Sign In
            </Button>
          </li>
        ) : isSignedIn ? (
          <li>
            <Button
              color="default"
              className="button--text"
              onClick={() => handleRouteChange("signin")}
            >
              Sign Out
            </Button>
          </li>
        ) : undefined}
      </ul>
    </nav>
  );
};

export default Navigation;
