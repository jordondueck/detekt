import React from "react";
import styled from "styled-components";
import { StylesProvider, Button } from "@material-ui/core";
import logo from "../Logo/logo_text.png";

const StyledButton = styled(Button)`
  padding: 0;
`;

const Navigation = ({ route, isSignedIn, handleRouteChange }) => {
  return (
    <StylesProvider injectFirst>
    <nav>
      <ul className="nav-list">
        <li>
          <img className="logo__text" src={logo} alt="detekt logo" />
        </li>
        {route === "signin" ? (
          <li>
            <StyledButton
              color="default"
              onClick={() => handleRouteChange("registration")}
            >
              Registers
            </StyledButton>
          </li>
        ) : route === "registration" ? (
          <li>
            <Button
              color="default"
              className="button--text"
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
    </StylesProvider>
  );
};

export default Navigation;
