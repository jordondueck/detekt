import * as Yup from "yup";

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
      password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(32, 'Password must be no more than 32 characters')
      .required('Required')
  });

export default SignInSchema;