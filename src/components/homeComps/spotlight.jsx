import React from "react";
import "../../app/globals.css";
import { CiLight } from "react-icons/ci";
import Cover from "@/ui/cover";

const Spotlight = () => {
  return (
    <div className="my-10">
      <div className="xl:h-[827px] rounded-lg p-2 xl:rounded-xl spotlight xl:p-20">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center xl:gap-3">
            <CiLight className="md:text-[26px] lg:text-[30px] xl:text-[55px]" />
            <h1 className="text-[14px] font-normal md:text-[26px] lg:text-[30px] xl:text-[33px]">
              Spotlight
              <span className="text-[#571998] xl:text-[33px] ml-2 font-medium">
                Games
              </span>
            </h1>
          </div>
          <div>
            <button className="px-3 py-1 text-[9px] sm:text-[14px] xl:font-medium xl:text-[17px] bg-[#7B25C1] lg:px-5 lg:py-2 lg:text-[16px] xl:px-7 xl:py-3 rounded-full">
              View All
            </button>
          </div>
        </div>
        <div className="flex justify-evenly gap-1 xl:px-1 my-2">
          <Cover />
          <Cover />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
