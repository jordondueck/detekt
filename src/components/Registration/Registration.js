import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterSchema } from "../ValidateForm/ValidateForm";
import {
  Button,
  FormControl,
  FormGroup
  // FormLabel
} from "react-bootstrap";

const Registration = ({ handleRouteChange }) => {
  return (
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("https://salty-mesa-37106.herokuapp.com/register", {
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
        <Form className="form">
          <h2 className="form__title">Register</h2>
          <FormGroup controlId="firstName">
            {/* <FormLabel>First Name</FormLabel> */}
            <Field name="firstname">
              {({ field, meta }) => (
                <FormControl
                  {...field}
                  {...meta}
                  className={meta.error && meta.touched ? "input--error" : ""}
                  type="text"
                  placeholder="First name"
                />
              )}
            </Field>
            <ErrorMessage className="error" name="firstname" component="div" />
          </FormGroup>
          <FormGroup controlId="lastName">
            {/* <FormLabel>Last Name</FormLabel> */}
            <Field name="lastname">
              {({ field, meta }) => (
                <FormControl
                  {...field}
                  {...meta}
                  className={meta.error && meta.touched ? "input--error" : ""}
                  type="text"
                  placeholder="Last name"
                />
              )}
            </Field>
            <ErrorMessage className="error" name="lastname" component="div" />
          </FormGroup>
          <FormGroup controlId="email">
            {/* <FormLabel>Email</FormLabel> */}
            <Field name="email">
              {({ field, meta }) => (
                <FormControl
                  {...field}
                  {...meta}
                  className={meta.error && meta.touched ? "input--error" : ""}
                  type="email"
                  placeholder="Email address"
                />
              )}
            </Field>
            <ErrorMessage className="error" name="email" component="div" />
          </FormGroup>
          <FormGroup controlId="password">
            {/* <FormLabel>Password</FormLabel> */}
            <Field name="password">
              {({ field, meta }) => (
                <FormControl
                  {...field}
                  {...meta}
                  className={meta.error && meta.touched ? "input--error" : ""}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Field>
            <ErrorMessage className="error" name="password" component="div" />
          </FormGroup>
          <Button variant="outline-dark" type="submit" disabled={isSubmitting}>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Registration;
