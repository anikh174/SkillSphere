
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const PopularCourseCard = ({course}) => {
  return (
    <div className="px-5 lg:px-0">
      <div className="card bg-base-100 shadow-md shadow-orange-400 border-2 border-orange-400">
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
          <p className={`${course.category === "Development" && "bg-sky-200 text-black py-1 px-4 w-32 rounded-full font-bold"} `}>{course.category}</p>
          <h2 className="text-md lg:text-xl font-semibold text-orange-400">{course.title}</h2>
          <p className="text-xl font-bold">{course.instructor}</p>
          <div className="flex justify-between">
            <p className="flex gap-1 items-center text-lg font-bold text-yellow-500">
              <FaStar />
              {course.rating}
            </p>
            <p className={`text-center 
              ${course.level === "Intermediate" && "bg-orange-500 text-white py-1 px-4 w-32 rounded-full font-bold"},
              ${course.level === "Beginner" && "bg-green-500 text-white py-1 px-4 w-28 rounded-full font-bold"}
              `}>{course.level}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseCard;
