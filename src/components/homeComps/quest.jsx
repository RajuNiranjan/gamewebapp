import ClanCard from "@/ui/clan-card";
import React from "react";

const Quest = () => {
  return (
    <div className="text-white my-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="xl:font-medium  xl:text-[43px]">
            Other <span className="text-[#571998]">Quests</span>
          </h1>
        </div>
        <div>
          <button className="px-3 text-[12px] xl:font-medium xl:text-[17px] bg-[#7B25C1] xl:px-7 xl:py-3 rounded-full">
            All Quest
          </button>
        </div>
      </div>
      <div className="">
        <ClanCard />
      </div>
    </div>
  );
};

export default Quest;
