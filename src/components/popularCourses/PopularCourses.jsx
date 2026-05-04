
import Link from "next/link";
import { FaFire, FaHandPointRight, FaStar } from "react-icons/fa";
import PopularCourseCard from "../PopularCourseCard/PopularCourseCard";
import { GiThunderball } from "react-icons/gi";

const PopularCourses = async() => {
  const res = await fetch("https://skillsphere-flame.vercel.app/data.json");
  const courses = await res.json();
  const popularCourse = await courses.slice(0, 3);

  return (
    <div className="bg-black py-5">
      <div className="container mx-auto">
        <div className="px-5 lg:px-0">
          <h1 className="text-white text-3xl font-bold flex gap-1 items-center"><GiThunderball />Popular Course <FaFire /></h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-5">
          {popularCourse.map((course) => (
            <PopularCourseCard course={course} key={course.id}></PopularCourseCard>
          ))}
        </div>

        <div className="flex justify-center mt-7 border-b-2 border-orange-300 w-40 mx-auto rounded-2xl hover:scale-105">
          <Link
            href={"/courses"}
            className="text-orange-400 font-bold flex gap-1 items-center text-xl pb-1"
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
