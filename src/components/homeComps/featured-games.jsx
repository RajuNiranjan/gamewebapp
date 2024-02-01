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
      <div className="">
        {/* <Link href={`/IndividualGame/Asphalt`}> */}
        <Card singlePost={singlePost} setSingleMovieData={setSingleMovieData} />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default FeaturedGames;
