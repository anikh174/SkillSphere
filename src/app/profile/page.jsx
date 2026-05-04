"use client";
import UpdateInfo from "@/components/updateInfo/UpdateInfo";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="pt-25 py-10 bg-black">
      <div className="w-80 md:w-96 mx-auto border-t-5 border-b-5 shadow-sm shadow-orange-300 border-orange-300 rounded-2xl">
        <figure className="p-5">
          <Image
            src={user?.image}
            alt={user?.name}
            height={200}
            width={200}
            className="mx-auto rounded-full border-4 border-orange-300 shadow-sm shadow-orange-300"
          ></Image>

          <h2 className="mt-5 text-center text-4xl font-bold bg-linear-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent">
            {user?.name}
          </h2>
          <p className="text-center text-sm mt-2 text-gray-500 font-bold">
            <span className="text-lg">Email:</span> {user?.email}
          </p>
        </figure>

        <div className="flex justify-center mb-5">
          <UpdateInfo></UpdateInfo>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
