import React from "react";

const SkilltonSideBarSkeleton = () => {
  return (
    <aside className="flex flex-col gap-6 w-full h-screen max-md:hidden drop-shadow-xl p-2 animate-pulse">
      {/* Profile Section */}
      <div className="flex flex-col items-start justify-start">
        {/* ------- Cover And Image ------- */}
        <div className="w-full relative">
          <div className="w-full h-[200px] bg-gray-300 rounded-lg" />
          <div className="w-20 h-20 absolute -bottom-2 border-2 border-emerald-400 left-1/2 transform -translate-x-1/2 z-10 bg-slate-700 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
          </div>

          {/* Mode Button */}
          <div className="w-8 h-8 bg-gray-300 rounded-full absolute bottom-2 z-20 start-2" />

          {/* Language Switcher */}
          <div className="w-8 h-8 bg-gray-300 rounded-full absolute bottom-12 z-20 start-2" />

          {/* OverLay */}
          <div className="absolute h-full w-full top-0 right-0 bg-black/40 rounded-b-2xl" />
        </div>

        {/* Personal Data */}
        <div className="w-full my-4">
          <div className="flex flex-col items-start gap-2">
            {/* Name And Cv */}
            <div className="flex items-center justify-between w-full grid-cols-2 gap-2">
              <div className="w-1/2 h-6 bg-gray-300 rounded" />
              <div className="w-1/4 h-6 bg-gray-300 rounded" />
            </div>
            <div className="w-2/3 h-4 bg-gray-300 rounded mt-2" />

            {/* Grid items */}
            <div className="grid grid-cols-1 gap-2 justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full" />
                <div className="w-2/3 h-4 bg-gray-300 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full" />
                <div className="w-2/3 h-4 bg-gray-300 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full" />
                <div className="w-2/3 h-4 bg-gray-300 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full" />
                <div className="w-2/3 h-4 bg-gray-300 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="w-full mt-4">
        <ul className="space-y-2">
          <li className="w-3/4 h-4 bg-gray-300 rounded" />
          <li className="w-3/4 h-4 bg-gray-300 rounded" />
          <li className="w-3/4 h-4 bg-gray-300 rounded" />
        </ul>
      </div>
    </aside>
  );
};

export default SkilltonSideBarSkeleton;
