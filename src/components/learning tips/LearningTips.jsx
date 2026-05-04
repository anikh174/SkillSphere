import React from "react";
import { FcWorkflow } from "react-icons/fc";
import { GiAlarmClock } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { MdLibraryBooks } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

const LearningTips = () => {
  return (
    <div className="bg-black py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-white mx-5">
          <h3 className="text-3xl lg:text-4xl font-bold flex items-center gap-2">
            <MdLibraryBooks />
            Learning <span className="text-orange-300">tips</span>
          </h3>

          <div className="flex flex-col md:flex-row justify-center md:gap-10 lg:gap-20 mt-8">
            <div className="flex flex-col gap-5">
              <div className="space-y-1 bg-purple-600 p-2 rounded-2xl border-b-5 border-l-10 border-purple-300 shadow-sm shadow-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <GiAlarmClock className="h-8 w-8 text-orange-300"></GiAlarmClock>
                <p className="text-xl md:text-2xl font-semibold lg:text-3xl lg:font-bold">Set a schedule</p>
                <p className="text-gray-300 text-sm lg:text-lg">Dedicate 30-60 minutes daily for consistent progress.</p>
              </div>

              <div className="space-y-1 bg-yellow-800 p-2 rounded-2xl border-l-10 border-b-5 border-yellow-300 shadow-sm shadow-yellow-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <GoGoal className="h-8 w-8 text-red-500"></GoGoal>
                <p className="text-xl md:text-2xl font-semibold lg:text-3xl lg:font-bold">Set clear goals</p>
                <p className="text-gray-300 text-sm lg:text-lg">Define what you want to achieve from each course.</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-5 md:mt-0">
              <div className="space-y-1 bg-sky-600 p-2 rounded-2xl border-b-5 border-r-10 border-sky-300 shadow-sm shadow-sky-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <FcWorkflow className="h-10 w-10"></FcWorkflow>
                <p className="text-xl md:text-2xl font-semibold lg:text-3xl lg:font-bold">Practice daily</p>
                <p className="text-gray-300 text-sm lg:text-lg">Apply concepts immediately after learning them.</p>
              </div>

              <div className="space-y-1 bg-green-700 p-2 rounded-2xl border-b-5 border-r-10 border-green-300 shadow-sm shadow-green-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <TfiWrite className="h-8 w-8 text-sky-300"></TfiWrite>
                <p className="text-xl md:text-2xl font-semibold lg:text-3xl lg:font-bold">Take notes</p>
                <p className="text-gray-300 text-sm lg:text-lg">Summarise key takeaways to boost retention.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningTips;
