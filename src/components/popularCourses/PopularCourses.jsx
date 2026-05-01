
import Link from "next/link";
import { FaHandPointRight, FaStar } from "react-icons/fa";
import PopularCourseCard from "../PopularCourseCard/PopularCourseCard";

const PopularCourses = async () => {
  const res = await fetch("https://skillsphere-flame.vercel.app/data.json");
  const courses = await res.json();
  const popularCourse = await courses.slice(0, 3);
  console.log(popularCourse)

  return (
    <div className="bg-black/50 pt-5">
      <div className="container mx-auto">
        <div className="px-5 lg:px-0">
          <h1 className="text-white text-3xl font-bold ">Popular Course</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          {popularCourse.map((course) => (
            <PopularCourseCard course={course} key={course.id}></PopularCourseCard>
          ))}
        </div>

        <div className="flex justify-center mt-5 border-b-2 border-sky-200 w-30 mx-auto rounded-2xl hover:scale-105 hover:bg-sky-200">
          <Link
            href={"/courses"}
            className="hover:text-black text-sky-200 font-semibold flex gap-1 items-center"
          >
            <FaHandPointRight />
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
