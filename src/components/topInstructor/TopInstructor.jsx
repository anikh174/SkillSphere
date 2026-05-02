import Image from "next/image";
import React from "react";
import { FaUserTie } from "react-icons/fa";

const TopInstructor = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto text-white px-5 lg:px-0">
        <h3 className="font-bold text-3xl lg:text-4xl flex items-center gap-1">
          <FaUserTie /> Top <span className="text-orange-300">Instructors</span>
        </h3>
        <div className="py-5 lg:py-10 md:px-30">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 md:gap-10">
            <div className="border-b-3 border-t-3 border-orange-300 p-5 rounded-2xl text-center space-y-1 w-40 md:w-50 lg:w-60">
              <Image
                src={
                  "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                }
                alt="John Doe"
                height={100}
                width={100}
                className="mx-auto p-1 border-2 border-orange-200 rounded-full shadow-sm shadow-orange-300"
              ></Image>
              <p className="text-xl font-bold text-orange-300">John Doe</p>
              <p className="text-md text-gray-300 font-bold">Web Dev</p>
            </div>

            <div className="border-b-3 border-t-3 border-orange-300 p-5 rounded-2xl text-center space-y-1 w-40 md:w-50 lg:w-60">
              <Image
                src={
                  "https://static.vecteezy.com/system/resources/previews/020/838/924/non_2x/career-woman-icon-design-free-vector.jpg"
                }
                alt="Sarah chen"
                height={100}
                width={100}
                className="mx-auto p-1 border-2 border-orange-200 rounded-full shadow-sm shadow-orange-300"
              ></Image>
              <p className="text-xl font-bold text-orange-300">Sarah Chen</p>
              <p className="text-md text-gray-300 font-bold">UI/UX</p>
            </div>

            <div className="border-b-3 border-t-3 border-orange-300 p-5 rounded-2xl text-center space-y-1 w-40 md:w-50 lg:w-60">
              <Image
                src={
                  "https://png.pngtree.com/png-clipart/20231020/original/pngtree-avatar-of-a-brunette-man-png-image_13379741.png"
                }
                alt="Ryan Park"
                height={100}
                width={100}
                className="mx-auto p-1 border-2 border-orange-200 rounded-full shadow-sm shadow-orange-300"
              ></Image>
              <p className="text-xl font-bold text-orange-300">Ryan Park</p>
              <p className="lg:text-md text-gray-300 font-bold text-sm">Ethical Hacking</p>
            </div>

            <div className="border-b-3 border-t-3 border-orange-300 p-5 rounded-2xl text-center space-y-1 w-40 md:w-50 lg:w-60">
              <Image
                src={
                  "https://img.freepik.com/premium-vector/boss-icon-vector-female-user-person-profile-avatar-symbol-business-pictogram_435942-2830.jpg"
                }
                alt="Mike Ross"
                height={100}
                width={100}
                className="mx-auto p-1 border-2 border-orange-200 rounded-full shadow-sm shadow-orange-300"
              ></Image>
              <p className="text-xl font-bold text-orange-300">Mike Ross</p>
              <p className="md:text-md text-gray-300 font-bold text-sm">Digital Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInstructor;
