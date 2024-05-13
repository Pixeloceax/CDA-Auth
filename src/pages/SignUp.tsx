import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{13,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 13 characters long"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp: React.FC = () => {
  const initialValues: SignUpFormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: SignUpFormValues) => {
    console.log(values);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-6">
              <Input label="Name" name="name" type="name" autoComplete="name" />
              <Input
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
              />
              <Input
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
              />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
              />
              <Button label={"Sign Up"} />
              <div className="flex">
                <p>Already registered ? </p>
                <Link to="/login">
                  <p className="font-bold underline pl-1">Sign In</p>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
