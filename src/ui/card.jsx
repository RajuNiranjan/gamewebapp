import React from "react";
import img from "../asserts/delysium cover.png";
import Image from "next/image";
import { SlGlobe } from "react-icons/sl";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import "../app/globals.css";

const Card = () => {
  return (
    <div className="w-[100px] md:w-[200px] md:h-[330px] xl:w-[253px] xl:h-[500px] bg-[#121212] rounded-[20px] border border-[#3F5EFB] border-opacity-20 cursor-pointer">
      <div className="w-max xl:w-[250px] xl:h-[350px]">
        <div className="absolute">
          <Image
            src={img}
            alt="image"
            width={250}
            height={250}
            className="w-[100px] h-max md:w-[200px]  xl:w-[250px] xl:h-max"
          />
        </div>
        <div className="relative md:ml-[130px]  xl:ml-[100px] top-2 left-[20px] xl:top-5 flex justify-center items-center gap-2">
          <h1 className="text-[12px] xl:font-bold xl:text-3xl">4.5</h1>
          <FaStar className="text-[12px] xl:text-3xl text-yellow-400" />
        </div>
      </div>
      <div className="flex item-center justify-between flex-col mt-[120px] md:mt-[250px] md:px-3 xl:mt-5 xl:px-5">
        <h1 className="text-[12px] xl:text-xl xl:font-semibold">Delysium</h1>
        <p className="text-[6px] xl:font-normal xl:text-[10px]">
          Shooter, Battle Royale
        </p>
        <p className="h-[1px] line xl:my-2 opacity-65"></p>
        <div className="flex justify-between items-center gap-1">
          <div className="flex gap-1">
            <SlGlobe className="text-[10px] xl:text-2xl" />
            <FaApple className="text-[10px] xl:text-2xl" />
            <IoLogoAndroid className="text-[10px] xl:text-2xl" />
          </div>
          <div>
            <button className="bg-[#7B25C1] text-[10px] px-2 xl:px-4 xl:py-2 rounded-[20px]">
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
