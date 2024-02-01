import Card from "@/ui/card";
import Link from "next/link";
import React from "react";

const FeaturedGames = () => {
  return (
    <div className="text-white my-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="xl:font-medium  xl:text-[43px]">
            Featured <span className="text-[#571998]">Games</span>
          </h1>
        </div>
        <div>
          <button className="px-3 text-[12px] xl:font-medium xl:text-[17px] bg-[#7B25C1] xl:px-7 xl:py-3 rounded-full">
            All Games
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-3 xl:gap-y-10 mt-10">
        <Link href={`/IndividualGame/Asphalt`}>
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
