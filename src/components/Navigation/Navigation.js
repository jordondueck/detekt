import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo";

const Navigation = () => {
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
      <p className="nav-section nav-item">Sign Out</p>
    </nav>
  );
};

export default Navigation;
