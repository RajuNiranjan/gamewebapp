"use client";
import React from "react";
import TwitterIcon from "@/asserts/twitter.png";
import RedditIcon from "@/asserts/reddit.png";
import Image from "next/image";
import RightSideChatComp from "./RightSideChatComp";

const RightComponent = () => {
  return (
    <div className="xl:w-[40%] bg-[#212121] xl:py-[20px] xl:px-[10px] h-fit">
      <div className="text-white xl:text-[19px] p-2 xl:font-[700] flex items-center gap-[40px]">
        <div className="flex items-center xl:gap-[8px] relative before:absolute before:w-full before:h-[2px] before:bottom-[-10px] before:bg-[#3F5EFB}">
          <Image
            src={TwitterIcon}
            alt="Twitter Icon"
            className="w-[20px] xl:w-[33px] xl:h-[33px]"
          />

          <p>Twitter</p>
        </div>

        <div className="flex items-center gap-[8px]">
          <Image
            src={RedditIcon}
            alt="Reddit Icon"
            className="w-[20px] xl:w-[22px] xl:h-[26px]"
          />

          <p>Reddit</p>
        </div>
      </div>

      <div className="mt-[30px] w-full">
        <div className="w-full">
          <RightSideChatComp />

          <RightSideChatComp />

          <RightSideChatComp />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
