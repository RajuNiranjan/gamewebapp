import React from "react";
import NewCard from "@/ui/new-card";

const TopPlayed = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-[24px] xl:text-[40px] font-medium ">
          Top <span className="text-[#571998]">Played</span>
        </h1>
      </div>
      <div>
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
      </div>
    </div>
  );
};

export default TopPlayed;
