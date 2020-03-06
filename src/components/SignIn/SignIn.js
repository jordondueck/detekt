import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignInSchema } from "../ValidateForm/ValidateForm";
import {
  Button,
  FormControl,
  FormGroup
  // FormLabel
} from "react-bootstrap";
import "./SignIn.css";

const SignIn = ({ handleRouteChange, handleSignIn }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("https://salty-mesa-37106.herokuapp.com/signin", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: values.email,
            password: values.password
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user.email) {
              handleSignIn(user);
              handleRouteChange("home");
            }
            // setSubmitting(false);
          })
          .catch(console.log);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-signin">
          <h2>Sign In</h2>
          <FormGroup controlId="formEmail">
            {/* <FormLabel>Email</FormLabel> */}
            <Field type="email" name="email">
              {({ field, form, meta }) => (
                <FormControl
                  type="email"
                  {...field}
                  placeholder="Email address"
                />
              )}
            </Field>
            <ErrorMessage name="email" component="div" />
          </FormGroup>
          <FormGroup controlId="formPassword">
            {/* <FormLabel>Password</FormLabel> */}
            <Field type="password" name="password">
              {({ field, form, meta }) => (
                <FormControl
                  type="password"
                  {...field}
                  placeholder="Password"
                />
              )}
            </Field>
            <ErrorMessage name="password" component="div" />
          </FormGroup>
          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
