import React from "react";
import img from "../asserts/clan.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import "../app/globals.css";

const ClanCard = () => {
  return (
    <div className="w-[253px] h-[500px] bg-[#121212] rounded-[20px] border border-[#3F5EFB] border-opacity-20">
      <div className="w-[250px] h-[350px]">
        <div className="absolute">
          <Image src={img} alt="image" width={250} height={250} />
        </div>
        <div className="relative ml-[150px] top-5 flex justify-center items-center gap-2">
          <h1 className="font-bold text-3xl">4.5</h1>
          <FaStar className="text-3xl text-yellow-400" />
        </div>
      </div>
      <div className="flex item-center justify-between flex-col mt-5 px-5">
        <h1 className="text-xl font-semibold">Red devil</h1>
        <div className="flex items-center justify-between">
          <span className="font-normal text-[10px]">Anouncement</span>
          <span className="font-normal text-[10px]">Featured</span>
        </div>
        <p className="h-[1px] line my-2 opacity-65"></p>
        <div className="flex justify-between items-center">
          <div className="flex ">
            <RiMoneyDollarCircleFill />
            <div className="flex flex-col">
              <span className="font-normal text-[10px]">Reward</span>
              <span className="font-normal text-[10px]">USD 130$</span>
            </div>
          </div>
          <div className="flex ">
            <RiMoneyDollarCircleFill />
            <div className="flex flex-col">
              <span className="font-normal text-[10px]">Reward</span>
              <span className="font-normal text-[10px]">USD 130$</span>
            </div>
          </div>
          <div className="flex">
            <RiMoneyDollarCircleFill />
            <div className="flex flex-col">
              <span className="font-normal text-[10px]">Reward</span>
              <span className="font-normal text-[10px]">USD 130$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClanCard;
