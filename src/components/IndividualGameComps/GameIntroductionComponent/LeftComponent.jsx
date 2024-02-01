"use client";
import React from "react";
import GameScreenShots from "./GameScreenShots";

const LeftComponent = () => {
  return (
    <div className="xl:w-[60%] text-white">
      <p className="text-[16px] xl:text-[43px] xl:font-[500]">Introduction</p>

      <p className="text-[12px] xl:mt-[20px] xl:text-[24px] xl:font-[500]">
        Gods Unchained is one of the earliest games to adopt blockchain
        technology alongside the likes of Axie Infinity and Splinterlands. The
        studio behind Gods Unchained wanted to reshape ownership for card game
        players who are used to getting their library wiped out every rotation.
        In Gods Unchained, players can completely own their digital items,
        giving players the freedom to trade, sell, and use their cards within or
        beyond the game with other titles who accept integrating their NFTs.
      </p>

      <GameScreenShots />
    </div>
  );
};

export default LeftComponent;
