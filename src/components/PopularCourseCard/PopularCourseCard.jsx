
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const PopularCourseCard = ({course}) => {
  return (
    <div className="px-5 lg:px-0">
      <div className="card bg-base-100 shadow-sm">
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
          <p>{course.category}</p>
          <h2 className="">{course.title}</h2>
          <p>{course.instructor}</p>
          <div className="flex justify-between">
            <p className="flex gap-1 items-center text-lg font-bold text-yellow-500">
              <FaStar />
              {course.rating}
            </p>
            <p>{course.level}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseCard;
