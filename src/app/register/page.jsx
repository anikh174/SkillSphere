"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    
    if(error){
      alert(error.message)
    }
    if(res){
      alert("Register successful")
    }
  };

  console.log(watch("password"));
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-25">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center">
          Register your account
        </h2>

        <form className="mt-5" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="type your name"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <label className="label">Photo Url</label>
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
              type="password"
              className="input"
              placeholder="Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
