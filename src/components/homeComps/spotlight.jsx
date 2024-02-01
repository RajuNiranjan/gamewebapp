import React from "react";
import "../../app/globals.css";
import { CiLight } from "react-icons/ci";
import Cover from "@/ui/cover";

const Spotlight = () => {
  return (
    <div className="my-10">
      <div className="xl:h-[827px] rounded-lg p-5 xl:rounded-xl spotlight xl:p-20">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center xl:gap-3">
            <CiLight className="md:text-[26px] lg:text-[30px] xl:text-[55px]" />
            <h1 className="text-[10px] font-normal md:text-[26px] lg:text-[30px] xl:text-[33px]">
              Spotlight
              <span className="text-[#571998] xl:text-[33px] ml-2 font-medium">
                Games
              </span>
            </h1>
          </div>
          <div>
            <button className="md:w-[60px] md:py-2 md:text-[12px] lg:w-[60px] xl:px-[22px] w-[50px] text-[8px] lg:text-[10px] lg:py-[10px] xl:py-[10px] bg-[#7B25C1] rounded-full">
              View All
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <Cover />
          <Cover />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
