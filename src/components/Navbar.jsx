"use client";

import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import userAvatar from "@/assets/randomAvatar.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session , isPending} = authClient.useSession();
  const user = session?.user;
  return (
    <div>
      <div className="navbar bg-black/80 text-white shadow-sm shadow-white fixed top-0 left-0 z-50 backdrop-blur-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 w-30 p-2 shadow text-lg"
            >
              <li>
                <NavLink href={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink href={"/courses"}>Courses</NavLink>
              </li>
              <li>
                <NavLink href={"/profile"}>My profile</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex font-bold gap-1 items-center">
            <p className="text-2xl font-bold">🎓 </p>
            <a className="text-2xl bg-linear-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
              SkillSphere
            </a>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/courses"}>Courses</NavLink>
            </li>
            <li>
              <NavLink href={"/profile"}>My profile</NavLink>
            </li>
          </ul>
        </div>
        {isPending ? <div className="flex gap-1 items-center navbar-end mr-5"><span className="loading loading-spinner text-accent"></span> loading...</div> : user? <div className="navbar-end flex gap-1 items-center">
          <Image
            src={user?.image || userAvatar}
            alt="user"
            height={40}
            width={40}
            className="bg-orange-400 rounded-full"
          ></Image>
          <button className="btn text-white bg-linear-to-r from-orange-500 to-orange-400 px-2 md:px-6 py-1 " onClick={async()=>await authClient.signOut()}>Logout</button>
          
        </div> : <button className="ml-26 md:ml-0 lg:ml-98 btn text-white bg-linear-to-r from-orange-500 to-orange-400 px-2 md:px-6 py-1 ">
            <Link href={"/login"}>Login</Link>
          </button>
        }
      </div>
    </div>
  );
};

export default Navbar;
