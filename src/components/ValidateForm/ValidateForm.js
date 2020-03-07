import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be no more than 32 characters")
    .required("Required")
});

export const RegisterSchema = Yup.object().shape({
  firstname: Yup.string()
    .trim()
    .max(32, "First name must be no more than 32 characters")
    .required("Required"),
  lastname: Yup.string()
    .trim()
    .max(32, "First name must be no more than 32 characters")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be no more than 32 characters")
    .required("Required")
});
