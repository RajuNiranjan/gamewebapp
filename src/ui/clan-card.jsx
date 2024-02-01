import React from "react";
import img from "../asserts/clan.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import "../app/globals.css";

const ClanCard = () => {
  return (
    <div className="w-[100px] h-max  md:w-[230px] md:h-[400px] xl:w-[253px] xl:h-[500px] bg-[#121212] rounded-md xl:rounded-[20px] border border-[#3F5EFB] border-opacity-20 cursor-pointer">
      <div className="w-max xl:w-[250px] xl:h-[350px]">
        <div className="absolute">
          <Image
            src={img}
            alt="image"
            width={250}
            height={250}
            className="w-[100px] h-max md:w-[230px]  xl:w-[250px] xl:h-max"
          />
        </div>
        <div className="relative md:ml-[130px]  xl:ml-[30px] top-2 left-[60px] xl:top-5 flex justify-center items-center gap-1">
          <h1 className="text-[8px] xl:text-[10px] xl:px-3 xl:h-[20px] flex justify-center items-center border px-2 rounded-full border-green-500 xl:font-bold xl:text-3xl">
            Live
          </h1>
        </div>
      </div>
      <div className="flex item-center justify-between flex-col mt-[125px] px-1 sm:mt-[250px] sm:px-2 md:mt-[290px] md:px-3 xl:mt-5 xl:px-5">
        <h1 className=" text-[10px] xl:text-xl font-semibold">Red devil</h1>
        <div className="flex items-center justify-between">
          <span className="font-normal text-[6px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[10px]">
            Anouncement
          </span>
          <span className="font-normal text-[6px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[10px]">
            Featured
          </span>
        </div>
        <p className="h-[1px] line my-2 opacity-65"></p>
        <div className="flex justify-between items-center py-1">
          <div className="flex gap-[2px]">
            <RiMoneyDollarCircleFill className="text-[10px] sm:text-[12px] md:text-[12px] xl:text-[14px]" />
            <div className="flex flex-col">
              <span className="font-normal text-[5px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[10px]">
                Reward
              </span>
              <span className="font-normal text-[4px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[10px]">
                USD 130$
              </span>
            </div>
          </div>
          <div className="flex gap-[2px]">
            <RiMoneyDollarCircleFill className="text-[10px] sm:text-[12px] md:text-[12px] xl:text-[14px]" />
            <div className="flex flex-col">
              <span className="font-normal text-[5px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[10px]">
                Reward
              </span>
              <span className="font-normal text-[4px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[10px]">
                USD 130$
              </span>
            </div>
          </div>
          <div className="flex gap-[2px]">
            <RiMoneyDollarCircleFill className="text-[10px] sm:text-[12px] md:text-[12px] xl:text-[14px]" />
            <div className="flex flex-col">
              <span className="font-normal text-[5px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[10px]">
                Reward
              </span>
              <span className="font-normal text-[4px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[10px]">
                USD 130$
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClanCard;
