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
        <h1 className="text-xl font-semibold">Delysium</h1>
        <p className="font-normal text-[10px]">Shooter, Battle Royale</p>
        <p className="h-[1px] line my-2 opacity-65"></p>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <SlGlobe className="text-2xl" />
            <FaApple className="text-2xl" />
            <IoLogoAndroid className="text-2xl" />
          </div>
          <div>
            <button className="bg-[#7B25C1] px-4 py-2 rou rounded-[20px]">
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
