"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleRegisterFunc = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success('Registration successful, Welcome to SkillSphere')
      router.push('/')
    }
  };

  const handleGoogleRegister = async()=>{
    const data = await authClient.signIn.social({
    provider: "google",
  });
  }
  return (
    <div className="mx-auto min-h-[80vh] flex justify-center items-center bg-black pt-20 pb-4 lg:pb-6 md:pt-28 md:pb-10 lg:pt-24">
      <div className="p-4 rounded-xl bg-black border-t-4 border-b-4 border-orange-400 shadow-sm shadow-orange-300">
        <h2 className="font-bold text-3xl text-center text-orange-300">
          Register your Account
        </h2>

        <form className="mt-5" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset bg-base-200 border-orange-300 rounded-box w-xs border-4 p-4 relative">
            <label className="label text-lg text-orange-400 font-semibold">Name</label>
            <input
              type="text"
              className="input"
              placeholder="type your name"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <label className="label text-lg text-orange-400 font-semibold">Photo Url</label>
            <input
              type="text"
              className="input"
              placeholder="enter your photo url"
              {...register("photo", {
                required: "Photo Url field is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}

            <label className="label text-lg text-orange-400 font-semibold">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <label className="label text-lg text-orange-400 font-semibold">Password</label>
            <input
              type={isShowPassword? "text" : "password"}
              className="input"
              placeholder="Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-6 top-75 text-lg"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>

        <div className="divider text-lg text-gray-700 font-semibold">OR</div>
        <button onClick={handleGoogleRegister} className="flex gap-1 items-center w-full bg-black text-white justify-center btn"><FaGoogle></FaGoogle>Register with Google</button>
      </div>
    </div>
  );
};

export default RegisterPage;
