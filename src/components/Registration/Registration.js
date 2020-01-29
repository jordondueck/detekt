import React , { useState } from "react";
import "./Registration.css";

const Registration = ({ handleRouteChange }) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleFirstNameChange = event => {
    setFirstNameInput(event.target.value);
  };

  const handleLastNameChange = event => {
    setLastNameInput(event.target.value);
  };

  const handleEmailChange = event => {
    setEmailInput(event.target.value);
  };

  const handlePasswordChange = event => {
    setPasswordInput(event.target.value);
  };

  const handleRegisterButton = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstNameInput,
        lastname: lastNameInput,
        email: emailInput,
        password: passwordInput
      })
    })
      .then(response => {
        if(response.status === 200)
        return response.json();
      })
        .then(data => {
        if (data) {
          handleRouteChange("signin");
        }
      })
      .catch(console.log);
  };

  return (
    <div className="registration--container">
      <div className="registration--form--container">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="fname">
              First Name
            </label>
            <input
              className="registration--form--input pa2 input-reset ba bg-transparent hover-bg-black hover-white"
              type="fname"
              name="fname"
              id="fname"
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="lname">
              Last Name
            </label>
            <input
              className="registration--form--input pa2 input-reset ba bg-transparent hover-bg-black hover-white"
              type="lname"
              name="lname"
              id="lname"
              onChange={handleLastNameChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Email
            </label>
            <input
              className="registration--form--input pa2 input-reset ba bg-transparent hover-bg-black hover-white"
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
              className="registration--form--input b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
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
            value="Register"
            onClick={handleRegisterButton}

          />
        </div>
        <div className="lh-copy mt3">
          {/* <p className="f6 link dim black db pointer">Forgot your password?</p> */}
        </div>
      </div>
    </div>
  );
};

export default Registration;
