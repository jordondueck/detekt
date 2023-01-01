import React, {useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterSchema } from "../ValidateForm/ValidateForm";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import Logo from "../Logo/Logo";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

const Registration = ({ handleRouteChange }) => {
  const [viewTerms, setViewTerms] = useState(false);
  const [viewPrivacy, setViewPrivacy] = useState(false);

  const handleViewTerms = (event) => {
    event.preventDefault();
    setViewPrivacy(false);
    setViewTerms(!viewTerms);
  }

  const handleViewPrivacy = (event) => {
    event.preventDefault();
    setViewTerms(false);
    setViewPrivacy(!viewPrivacy);
  }

  return (
    <>
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "", password: "", confirmpassword: "" }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("https://detekt-api.onrender.com/register", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password
          })
        })
          .then(response => {
            if (response.status === 200) return response.json();
          })
          .then(data => {
            if (data) {
              handleRouteChange("signin");
            }
          })
          .catch(console.log);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form form--narrow form--border">
          <Logo />
          <h2 className="title title--medium">Register</h2>
          <FormGroup className="form-group--wide" controlId="firstName">
            <Field name="firstname">
              {({ field, meta }) => (
                <FormControl
                  {...field}
                  className={meta.error && meta.touched ? "input--error" : ""}
                  type="text"
                  placeholder="First name"
                />
              )}
            </Field>
            <ErrorMessage className="error" name="firstname" component="div" />
          </FormGroup>
          <FormGroup className="form-group--wide" controlId="lastName">
            <Field name="lastname">
              {({ field, meta }) => (
                <FormControl
                  {...field}
                  className={meta.error && meta.touched ? "input--error" : ""}
                  type="text"
                  placeholder="Last name"
                />
              )}
            </Field>
            <ErrorMessage className="error" name="lastname" component="div" />
          </FormGroup>
          <FormGroup className="form-group--wide" controlId="email">
            <Field name="email">
              {({ field, meta }) => (
                <FormControl
                  {...field}
                  className={meta.error && meta.touched ? "input--error" : ""}
                  type="email"
                  placeholder="Email address"
                />
              )}
            </Field>
            <ErrorMessage className="error" name="email" component="div" />
          </FormGroup>
          <FormGroup className="form-group--wide" controlId="password">
            <Field name="password">
              {({ field, meta }) => (
                <FormControl
                  {...field}
                  className={meta.error && meta.touched ? "input--error" : ""}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Field>
            <ErrorMessage className="error" name="password" component="div" />
          </FormGroup>
          <FormGroup className="form-group--wide" controlId="confirmpassword">
            <Field name="confirmpassword">
              {({ field, meta }) => (
                <FormControl
                  {...field}
                  className={meta.error && meta.touched ? "input--error" : ""}
                  type="password"
                  placeholder="Confirm password"
                />
              )}
            </Field>
            <ErrorMessage className="error" name="confirmpassword" component="div" />
          </FormGroup>
          {/* <FormGroup controlId="acceptterms">
            <Field name="acceptterms">
              {({ field, meta }) => (
                <FormControl
                  {...field}
                  className={meta.error && meta.touched ? "input--error" : ""}
                  type="checkbox"
                />
              )}
            </Field>
            <label htmlFor="acceptterms" className="form-check-label">Accept<button className="button--text">Terms & Conditions</button></label>
            <ErrorMessage className="error" name="acceptterms" component="div" />
          </FormGroup> */}
          <Button variant="outline-dark" type="submit" disabled={isSubmitting}>
            Register
          </Button>
          <small className="text-muted" style={{marginTop: "1rem"}}>By registering, you agree to the <button className="button--text" onClick={handleViewTerms}>Terms and Conditions</button> and <button className="button--text" onClick={handleViewPrivacy}>Privacy Policy</button></small>
        </Form>
      )}
    </Formik>
    {viewTerms ? <TermsAndConditions setViewTerms={setViewTerms} /> : viewPrivacy ? <PrivacyPolicy handleViewTerms={handleViewTerms} setViewPrivacy={setViewPrivacy} /> : undefined}
    </>
  );
};

export default Registration;
