import React, { Fragment } from "react";
import logo from "./logo_text.png";

const Logo = () => {
  return (
    <Fragment>
      <img className="logo__text" src={logo} alt="detekt logo" />
    </Fragment>
  );
};

export default Logo;
