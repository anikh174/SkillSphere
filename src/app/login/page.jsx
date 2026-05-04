"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Login successful");
    }
  };

  const handleGoogleRegister = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="mx-auto min-h-[80vh] flex justify-center items-center bg-black pt-20 pb-4 lg:pb-6 md:pt-28 md:pb-10 lg:pt-25">
      <div className="p-4 rounded-xl bg-black border-orange-400 border-b-4 border-t-4 shadow-sm shadow-orange-300">
        <h2 className="font-bold text-3xl text-center text-orange-300">LogIn your Account</h2>

        <form className="mt-5" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset bg-base-200 border-orange-300 rounded-box w-xs border-4 p-4 relative">
            <label className="label text-lg text-orange-400 font-semibold">Email</label>
            <input
              type="email"
              className="input"
              placeholder="type your Email"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label className="label text-lg text-orange-400 font-semibold">Password</label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="type your Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-6 top-35 text-lg"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>

        <div className="divider text-gray-700 font-bold text-lg">OR</div>
        <button
          onClick={handleGoogleRegister}
          className="flex gap-1 items-center w-full bg-black text-white justify-center btn"
        >
          <FaGoogle></FaGoogle>Login with Google
        </button>

        <p className="mt-5 text-md font-semibold text-gray-700">
          Don't Have an account?{" "}
          <Link href={"/register"} className="text-orange-300 text-xl font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
