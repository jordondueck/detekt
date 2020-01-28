import React, { useState } from "react";
import "./SignIn.css";

const SignIn = ({ handleRouteChange, handleSignIn }) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailChange = event => {
    setEmailInput(event.target.value);
  };

  const handlePasswordChange = event => {
    setPasswordInput(event.target.value);
  };

  const handleSignInButton = () => {
    console.log("Email", emailInput);
    console.log("Password", passwordInput);
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.email) {
          console.log('user' , user);
          handleSignIn(user);
          handleRouteChange("home");
        }
      })
      .catch(console.log);
  };

  return (
    <div className="signin--container">
      <div className="signin--form--container">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Email
            </label>
            <input
              className="signin--form--input pa2 input-reset ba bg-transparent hover-bg-black hover-white"
              type="email"
              name="email-address"
              id="email-address"
              onChange={handleEmailChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Password
            </label>
            <input
              className="signin--form--input b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
              type="password"
              name="password"
              id="password"
              onChange={handlePasswordChange}
            />
          </div>
          {/* <label className="pa0 ma0 lh-copy f6 pointer">
            <input className="pointer" type="checkbox" /> Remember me
          </label> */}
        </fieldset>
        <div className="">
          <input
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Sign in"
            onClick={handleSignInButton}
          />
        </div>
        <div className="lh-copy mt3">
          <p
            className="f6 link dim black db pointer"
            onClick={() => handleRouteChange("registration")}
          >
            Sign up
          </p>
          {/* <p className="f6 link dim black db pointer">Forgot your password?</p> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
