import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaUser } from "react-icons/fa";

const PopularCourseCard = ({ course }) => {
  return (
    <div className="px-5 lg:px-0">
      <div className="card bg-base-100 shadow-md shadow-orange-400 border-2 border-orange-400 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-400 relative group overflow-hidden">
        <figure>
          <Image
            src={course.image}
            alt={course.title}
            height={500}
            width={500}
            className="w-[400px] h-[150px] md:w-[400px] md:h-[200px] lg:w-[500px]"
          ></Image>
        </figure>
        <div className="p-5 space-y-1">
          <p className="text-lg font-semibold">{course.category}</p>
          <h2 className="text-md lg:text-xl font-semibold text-orange-400">
            {course.title}
          </h2>
          <p className="text-xl font-bold flex items-center gap-1">
            <FaUser />
            {course.instructor}
          </p>
          <div className="flex justify-between border-t-2 border-gray-300 my-2 py-2">
            <p className="flex gap-1 items-center text-lg font-bold text-yellow-500">
              <FaStar />
              {course.rating}
            </p>
            <p
              className={`text-center 
              ${course.level === "Intermediate" && "bg-orange-500 text-white py-1 px-4 w-32 rounded-full font-bold"},
              ${course.level === "Beginner" && "bg-green-500 text-white py-1 px-4 w-28 rounded-full font-bold"}
              ${course.level === "All Levels" && "bg-red-500 text-white py-1 px-4 w-28 rounded-full font-bold"}
              `}
            >
              {course.level}
            </p>
          </div>
        </div>

        <div
          className="px-2 lg:absolute lg:inset-0 lg:bg-black/60 lg:flex lg:items-center lg:justify-center 
                  lg:translate-y-full lg:group-hover:translate-y-0 lg:transition lg:duration-500"
        >
          <Link href={`/courses/${course.id}`}>
            <button className="btn rounded-full mb-2 w-full text-lg font-bold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseCard;