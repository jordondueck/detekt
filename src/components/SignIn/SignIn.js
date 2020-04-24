import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignInSchema } from "../ValidateForm/ValidateForm";
import { FormGroup } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Logo from "../Logo/Logo";

const SignIn = ({ handleRouteChange, handleSignIn }) => {
  const [muiValues, setMuiValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setMuiValues({ ...muiValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setMuiValues({ ...muiValues, showPassword: !muiValues.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
            password: values.password,
          }),
        })
          .then((response) => response.json())
          .then((user) => {
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
        <Form className="form form--narrow form--border">
          <Logo />
          <h2 className="title title--medium">Sign In</h2>
          <Field name="email">
            {({ field, meta }) => (
              <FormControl
                className="form-group--wide"
                style={{ marginBottom: "1rem" }}
                variant="outlined"
                {...field}
              >
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                  id="email"
                  type="text"
                  onChange={handleChange("email")}
                />
              </FormControl>
            )}
          </Field>

          <Field name="password">
            {({ field, meta }) => (
              <FormControl
                className="form-group--wide"
                style={{ marginBottom: "1rem" }}
                variant="outlined"
                {...field}
              >
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={muiValues.showPassword ? "text" : "password"}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {muiValues.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            )}
          </Field>
          <Button variant="contained" color="primary" type="submit">
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
