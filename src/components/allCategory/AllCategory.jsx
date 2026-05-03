import Link from "next/link";
import React from "react";

const AllCategory = ({AllCourses, category}) => {
  return (
    <div className="text-white mt-5 ml-5 lg:ml-0">
        <Link href={`?category = AllCourses`}>
          <button>
            <p
              className="text-orange-300 border-2 border-orange-300 px-3 text-center py-1 lg:px-4 lg:py-2 rounded-full font-semibold lg:font-bold text-sm lg:text-md cursor-pointer"
            >
              All
            </p>
          </button>
        </Link>
    </div>
  );
};

export default AllCategory;
