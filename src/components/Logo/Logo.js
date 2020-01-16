import React from "react";
import "./Logo.css";
import Tilt from "react-tilt";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Tilt options={{ max: 50 }}>
        <div>
          <img className="logo-img" src={logo} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
