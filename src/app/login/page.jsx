"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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

  console.log(watch("password"));
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 pt-20 pb-4 lg:pb-0 md:pt-28 md:pb-10 lg:pt-20">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center">LogIn your account</h2>

        <form className="mt-5" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 relative">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label className="label">Password</label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-8 top-30 text-lg"
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

        <p>
          Don't Have an account?{" "}
          <Link href={"/register"} className="text-sky-300">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
