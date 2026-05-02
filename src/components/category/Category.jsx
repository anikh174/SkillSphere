import Link from "next/link";
import React from "react";

const Category = async () => {
  const res = await fetch("https://skillsphere-flame.vercel.app/category.json");
  const categories = await res.json();
  return (
    <div className="text-white flex flex-wrap gap-2 md:gap-5 mt-5 mx-5 lg:mx-0 ">
      {categories.map((c) => (
        <Link key={c.id} href={`?category=${c.name.toLowerCase()}`}>
          <button>
            <p
              key={c.id}
              className="text-orange-300 border-2 border-orange-300 px-3 text-center py-1 lg:px-4 lg:py-2 rounded-full font-semibold lg:font-bold text-sm lg:text-md cursor-pointer"
            >
              {c.name}
            </p>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
