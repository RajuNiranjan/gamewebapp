"use client";
import { GlobalContext } from "@/context/context";
import Card from "@/ui/card";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

const FeaturedGames = () => {
  const { singlePost, setSingleMovieData } = useContext(GlobalContext);

  return (
    <div className="text-white my-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[18px] sm:text-[24px] sm:font-medium lg:text-3xl xl:font-medium  xl:text-[43px]">
            Featured <span className="text-[#571998]">Games</span>
          </h1>
        </div>
        <div>
          <button className="px-3 py-2 text-[10px] sm:text-[14px] xl:font-medium xl:text-[17px] bg-[#7B25C1] lg:px-5 lg:py-2 lg:text-[16px] xl:px-7 xl:py-3 rounded-full">
            All Games
          </button>
        </div>
      </div>
      <div className="my-6">
        {/* <Link href={`/IndividualGame/Asphalt`}> */}
        <Card singlePost={singlePost} setSingleMovieData={setSingleMovieData} />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default FeaturedGames;
