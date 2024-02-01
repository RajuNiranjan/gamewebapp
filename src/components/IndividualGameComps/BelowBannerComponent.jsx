import React, { useState } from "react";
import GameIntroductionComponent from "./GameIntroductionComponent";

const BelowBannerComponent = () => {
  const [activeFilter, setActiveFilter] = useState("Overview");

  const allFiltersArray = ["Overview", "Quest", "Clan", "Guide"];

  return (
    <div className="w-[90%] mx-auto">
      <div className="mt-[30px] text-[#ffffff80] text-[12px] xl:text-[20px] font-[600] flex items-center gap-[20px]">
        {allFiltersArray.map((filterName, index) => {
          return (
            <p
              key={index}
              className={`${
                filterName === activeFilter && "text-white"
              } transition-all duration-500 cursor-pointer`}
              onClick={() => {
                setActiveFilter(filterName);
              }}>
              {filterName}
            </p>
          );
        })}
      </div>

      <div className="mt-[10px] w-full h-[2px] bg-[#2D2D2D]" />

      <GameIntroductionComponent />
    </div>
  );
};

export default BelowBannerComponent;
