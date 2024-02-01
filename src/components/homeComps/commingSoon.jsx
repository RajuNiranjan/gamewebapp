import React from "react";
import NewCard from "@/ui/new-card";

const CommingSoon = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-[40px] font-medium ">
          Comming <span className="text-[#571998]">Soon</span>
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

export default CommingSoon;
