import PopularCourseCard from "@/components/PopularCourseCard/PopularCourseCard";
import Link from "next/link";
import React from "react";
import { FaFire, FaHandPointRight } from "react-icons/fa";
import { GiThunderball } from "react-icons/gi";

const AllCoursesPage = async () => {
  const res = await fetch("https://skillsphere-flame.vercel.app/data.json");
  const courses = await res.json();
  const AllCourses = await courses;
  console.log(AllCourses);
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto">
        <div className="px-5 lg:px-0">
          <h1 className="text-white text-3xl font-bold flex gap-1 items-center">
            <GiThunderball />
            All Courses <FaFire />
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-5">
          {AllCourses.map((course) => (
            <PopularCourseCard
              course={course}
              key={course.id}
            ></PopularCourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCoursesPage;
