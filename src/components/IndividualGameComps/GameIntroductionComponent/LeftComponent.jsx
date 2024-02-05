"use client";
import React from "react";
import GameScreenShots from "./GameScreenShots";

const LeftComponent = ({ details }) => {
  return (
    <div className="xl:w-[60%] text-white">
      <p className="text-[16px] xl:text-[43px] xl:font-[500]">Introduction</p>

      <p className="text-[12px] xl:mt-[20px] xl:text-[24px] xl:font-[500]">
        {details?.game_introduction}
      </p>

      <GameScreenShots details={details} />
    </div>
  );
};

export default LeftComponent;
