"use client";
import React from "react";
import LeftComponent from "./GameIntroductionComponent/LeftComponent";
import RightComponent from "./GameIntroductionComponent/RightComponent";
import ReviewComp from "./GameIntroductionComponent/ReviewComp";
import ClanCard from "@/ui/clan-card";
import Card from "@/ui/card";
import { useContext } from "react";
import { GlobalContext } from "@/context/context";
import TwitchFeed from "@/ui/twitchFeed";

const GameIntroductionComponent = ({ details }) => {
  const { singlePost, setSingleMovieData } = useContext(GlobalContext);

  return (
    <div className="w-full mt-[20px]">
      <div className="w-full  flex flex-col xl:flex-row gap-[20px]">
        <LeftComponent details={details} />

        <RightComponent />
      </div>

      <div className="xl:mt-[20px] ">
        <ReviewComp />

        <div className="text-white xl:text-[43px] font-[500] mt-[20px]">
          <p>
            Twitch <span className="text-[#3F5EFB]">Feed</span>
          </p>

          <div className=" grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4">
            <TwitchFeed />
            <TwitchFeed />
            <TwitchFeed />
            <TwitchFeed />
          </div>
        </div>

        <div className="text-white xl:text-[43px] font-[500] mt-[20px]">
          <p>
            Related <span className="text-[#3F5EFB]">Games</span>
          </p>

          <div className="">
            <Card
              singlePost={singlePost}
              setSingleMovieData={setSingleMovieData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameIntroductionComponent;
