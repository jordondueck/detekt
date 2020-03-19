import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignInSchema } from "../ValidateForm/ValidateForm";
import {
  Button,
  FormControl,
  FormGroup
  // FormLabel
} from "react-bootstrap";

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
        <Form className="form">
          <h2 className="title title--medium">Sign In</h2>
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
          <Button variant="outline-dark" type="submit">
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
