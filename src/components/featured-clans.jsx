import ClanCard from "@/ui/clan-card";
import React from "react";

const FeaturedClans = () => {
  return (
    <div className="text-white ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-medium text-[43px]">
            Featured <span className="text-[#571998]">Clans</span>
          </h1>
        </div>
        <div>
          <button className="font-medium text-[17px] bg-[#7B25C1] px-7 py-3 rounded-full">
            All Games
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 gap-y-10 mt-10">
        <ClanCard />
        <ClanCard />
        <ClanCard />
        <ClanCard />
        <ClanCard />
        <ClanCard />
        <ClanCard />
        <ClanCard />
        <ClanCard />
        <ClanCard />
      </div>
    </div>
  );
};

export default FeaturedClans;
