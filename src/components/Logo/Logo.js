import React, { Fragment } from "react";
import logo from "./logo.png";

const Logo = () => {
  return (
    <Fragment>
      <img className="logo-img" src={logo} alt="Logo" />
    </Fragment>
  );
};

export default Logo;
