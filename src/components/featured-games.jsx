import Card from "@/ui/card";
import Link from "next/link";
import React from "react";

const FeaturedGames = () => {
  return (
    <div className="text-white ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-medium text-[43px]">
            Featured <span className="text-[#571998]">Games</span>
          </h1>
        </div>
        <div>
          <button className="font-medium text-[17px] bg-[#7B25C1] px-7 py-3 rounded-full">
            All Games
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 gap-y-10 mt-10">
        <Link
        href={`/IndividualGame/Asphalt`}>
        <Card />
        </Link>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default FeaturedGames;
