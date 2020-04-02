import React, { Fragment } from "react";
import logo from "./logo_text.png";

const Logo = () => {
  return (
    <Fragment>
      <img className="logo-img" src={logo} alt="detekt logo" />
    </Fragment>
  );
};

export default Logo;
