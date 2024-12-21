import React, { useState } from "react";
import LoadingButton from "../../components/buttons/LoadingButton";
import FormInput from "../../components/forms/FormInput";
import { LogoImage, routes } from "../../lib/utils/constants";
import { Link } from "react-router";
import { validateSchema } from "../../lib/utils/helpers/validator";
import { LoginSchema } from "../../lib/utils/schemas/AuthSchema";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [auth, setAuth] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAuth({ ...auth, [name]: value });

    // setAuth((preValue) => {
    //   return { ...preValue, [name]: value };
    // });
  };

  const validateForm = () => {
    let newErrors = validateSchema(auth, LoginSchema);
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    alert("Form sUBMITEED");

    console.log(auth);
  };
  return (
    <>
      <div className="px-[120px] py-[35px]">
        <header>
          <Link to={routes.HOME}>
            <img src={LogoImage} alt="Logo" />
          </Link>
        </header>
        <main className="max-w-[360px] mx-auto min-h-[calc(100vh-95px)] flex  justify-center flex-col w-full">
          <h1 className="font-bold text-2xl">Hello, Welcome Back</h1>
          <p className="text-sm text-customGray mt-1 mb-5">
            Please enter your credentials to login.
          </p>
          <div className="bg-customBlackGray px-5 py-10 rounded-[20px] w-full">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <FormInput
                placeholder="Enter Email Address"
                name="email"
                value={auth.email}
                handleChange={handleChange}
                error={errors?.email}
              />

              <FormInput
                type="password"
                placeholder="Password"
                name="password"
                value={auth.password}
                handleChange={handleChange}
                error={errors?.password}
              />

              <LoadingButton type="submit" isLoading={false}>
                Sign In
              </LoadingButton>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
