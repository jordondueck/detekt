import React from "react";
import "./Registration.css";

const Registration = () => {
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
