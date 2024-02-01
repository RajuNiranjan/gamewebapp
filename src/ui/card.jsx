"use client";
import React from "react";
import img from "../asserts/delysium cover.png";
import Image from "next/image";
import { SlGlobe } from "react-icons/sl";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import "../app/globals.css";
import { useRouter } from "next/navigation";

const Card = ({ singlePost, setSingleMovieData }) => {
  const router = useRouter();

  const handelNavgateSinglePage = (item) => {
    router.push(`/IndividualGame/${item?.id}`);
    setSingleMovieData(item);
  };
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-3 xl:gap-y-10 mt-10">
      {singlePost?.map((item, index) => (
        <div
          key={index}
          className="w-[80px] h-[165px]  md:w-[200px] md:h-[330px] xl:w-[253px] xl:h-[500px] bg-[#121212] rounded xl:rounded-[20px] border border-[#3F5EFB] border-opacity-20 cursor-pointer">
          <div className="w-max xl:w-[250px] xl:h-[350px]">
            <div
              className="absolute "
              onClick={() => handelNavgateSinglePage(item)}>
              <Image
                src={item?.poster}
                alt="image"
                width={250}
                height={250}
                className="w-[80px] h-max md:w-[200px]  xl:w-[250px] xl:h-max"
              />
            </div>
            <div className="relative md:ml-[100px]  xl:ml-[10px] top-2 left-[2.5rem] xl:top-5 flex justify-center items-center gap-2">
              <h1 className="text-[12px] xl:font-bold xl:text-3xl">4.5</h1>
              <FaStar className="text-[12px] xl:text-3xl text-yellow-400" />
            </div>
          </div>
          <div className="flex item-center justify-between flex-col mt-[90px] md:mt-[250px] md:px-3 xl:mt-5 xl:px-5">
            <h1 className="text-[12px] xl:text-xl xl:font-semibold">
              Delysium
            </h1>
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
                <button className="bg-[#7B25C1] text-[8px] px-2 xl:px-4 xl:py-2 rounded-[20px]">
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
