import React from "react";
import NewCard from "@/ui/new-card";

const NewReleased = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-[24px] xl:text-[40px] font-medium ">
          New <span className="text-[#571998]">Released</span>
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

export default NewReleased;
