import Link from "next/link";
import React from "react";

const AllCategory = ({AllCourses, category}) => {
  return (
    <div className="text-white">
        <Link href={`?category = AllCourses`}>
          <button>
            <p
              className="text-orange-300 border-2 border-orange-300 px-3 text-center py-1 lg:px-4 lg:py-2 rounded-full font-semibold lg:font-bold text-sm lg:text-md cursor-pointer hover:bg-orange-300 hover:text-white hover:border-2 hover:border-white hover:shadow-sm hover:shadow-white"
            >
              All
            </p>
          </button>
        </Link>
    </div>
  );
};

export default AllCategory;
