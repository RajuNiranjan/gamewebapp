import React from "react";
import "../app/globals.css";
import { CiLight } from "react-icons/ci";
import Cover from "@/ui/cover";

const Spotlight = () => {
  return (
    <div className="my-10">
      <div className="h-[827px] spotlight p-20">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <CiLight className="text-[55px]" />
            <h1 className="font-normal text-[33px]">
              Spotlight
              <span className="text-[#571998] text-[33px] ml-2 font-medium">
                Games
              </span>
            </h1>
          </div>
          <div>
            <button className="px-[22px] py-[10px] bg-[#7B25C1] rounded-full">
              View All
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <Cover />
          <Cover />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
