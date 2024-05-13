import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

interface SignInFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn: React.FC = () => {
  const initialValues: SignInFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: SignInFormValues) => {
    console.log(values);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
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
              <Button label={"Sign In"} />
              <div className="flex">
                <p>Don't have a account ?</p>
                <Link to={"/register"} className="font-bold underline pl-1">
                  Register Here
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
