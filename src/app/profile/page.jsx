"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  
  return (
    <div className="mt-25 py-10">
      <div className="w-96 mx-auto border-2 border-orange-300 rounded-2xl">
        <figure>
          <Image src={user?.image} alt={user?.name} height={300} width={300} className="mx-auto"></Image>

          <h2 className="text-center text-4xl font-bold bg-linear-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent">{user?.name}</h2>
          <p className="text-center text-sm my-2 text-gray-500 font-bold">{user?.email}</p>
        </figure>
      </div>
    </div>
  );
};

export default ProfilePage;
