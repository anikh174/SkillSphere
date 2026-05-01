import Image from "next/image";
import React from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { GiClick, GiPartyPopper } from "react-icons/gi";
import { MdOutlineWatchLater, MdReviews } from "react-icons/md";

const CoursesDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://skillsphere-flame.vercel.app/data.json");
  const courses = await res.json();

  const CourseDetails = courses.find((c) => c.id == id);
  return (
    <div className="pt-25 bg-black py-10 px-3">
      <div className="p-5 max-w-7xl mx-auto border-l-2 border-r-2 border-orange-400 rounded-2xl">
        <div className="grid  md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-3 border-t-5 border-orange-300 rounded-2xl p-2">
            <div className="flex gap-2 items-center text-lg text-orange-300">
              <p>{CourseDetails.category}</p>
              ||
              <p>{CourseDetails.level}</p>
            </div>

            <h4 className="text-2xl font-bold">{CourseDetails.title}</h4>

            <div className="flex items-center justify-between flex-wrap">
              <div className="flex gap-1 items-center">
                <p className="flex gap-1 items-center text-orange-300">
                  <FaStar />
                  {CourseDetails.rating}
                </p>
                <p>({CourseDetails.reviews} reviews)</p>
              </div>

              <p className="flex gap-1 items-center">
                <MdOutlineWatchLater />
                {CourseDetails.duration}
              </p>
              <p className="flex gap-1 items-center">
                <FaUser /> <span>Instructor :</span>
                {CourseDetails.instructor}
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold">Course curriculum</p>

              <div>
                {CourseDetails.curriculum.map((c) => (
                  <div className="flex justify-between items-center" key={id}>
                    <div className="flex gap-2 items-center text-gray-300">
                      <span className="bg-orange-400 text-white h-3 w-3 rounded-full text-center p-2"></span>
                      <p className="flex items-center">{c.title}</p>
                    </div>
                    <p>{c.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="justify-center rounded-full flex items-center gap-2 font-bold text-xl border-b-5 border-orange-300 text-orange-300 px-4 py-1">
              Enrollments: {CourseDetails.enrollments} <GiClick />
            </p>
          </div>

          <div className="text-white space-y-3">
            <h3 className="text-gray-300 font-semibold text-lg">
              {CourseDetails.description}
            </h3>
            <Image
              src={CourseDetails.image}
              alt={CourseDetails.title}
              width={300}
              height={300}
              className="w-full h-[200px] rounded-2xl"
            ></Image>

            <p className="text-3xl font-bold flex items-center gap-5">
              {CourseDetails.enrollmentType}
              <GiPartyPopper />
            </p>

            <button className="rounded-full flex items-center gap-2 font-bold text-xl border-b-2 border-orange-300 text-orange-300 px-4 py-1 cursor-pointer hover:scale-105 mx-auto">
              Enroll Now <GiClick />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailPage;
