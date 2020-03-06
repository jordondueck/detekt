import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterSchema } from "../ValidateForm/ValidateForm";
import {
  Button,
  FormControl,
  FormGroup
  // FormLabel
} from "react-bootstrap";
import "./Registration.css";

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
        <Form className="form-register">
          <h2>Register</h2>
          <FormGroup controlId="formFirstName">
            {/* <FormLabel>First Name</FormLabel> */}
            <Field type="text" name="firstname">
              {({ field, form, meta }) => (
                <FormControl type="text" {...field} placeholder="First Name" />
              )}
            </Field>
            <ErrorMessage name="firstname" component="div" />
          </FormGroup>
          <FormGroup controlId="formLastName">
            {/* <FormLabel>Last Name</FormLabel> */}
            <Field type="text" name="lastname">
              {({ field, form, meta }) => (
                <FormControl type="text" {...field} placeholder="Last Name" />
              )}
            </Field>
            <ErrorMessage name="lastname" component="div" />
          </FormGroup>
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
          <Button variant="outline-dark" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Registration;
