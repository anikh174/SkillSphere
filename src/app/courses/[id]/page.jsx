import React from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

const CoursesDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://skillsphere-flame.vercel.app/data.json");
  const courses = await res.json();

  const CourseDetails = courses.find((c) => c.id == id);
  return (
    <div className="pt-20 bg-black">
      <div className="border-2 border-orange-400 p-5  max-w-7xl mx-auto">
        <div className="text-white space-y-3">
          <div className="flex gap-2 items-center">
            <p>{CourseDetails.category}</p>
            ||
            <p>{CourseDetails.level}</p>
          </div>

          <h4>{CourseDetails.title}</h4>

          <div className="flex items-center gap-10">
            <div className="flex gap-1 items-center">
            <p>{CourseDetails.rating}</p>
            <p>(1,200 reviews)</p>
            </div>

            <p className="flex gap-1 items-center"><MdOutlineWatchLater />{CourseDetails.duration}</p>
            <p className="flex gap-1 items-center"><FaUser/>{CourseDetails.instructor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailPage;
