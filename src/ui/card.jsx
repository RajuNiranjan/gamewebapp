"use client";
import React from "react";
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
    <div
      className="grid grid-cols-3 sm:grid-cols-4 gap-5  md:grid-cols-4 lg:grid-cols-3
     xl:grid-cols-4 2xl:grid-cols-5 ">
      {singlePost?.map((item, index) => (
        <div
          key={index}
          className="w-[80px] h-max sm:w-[130px]  md:w-[170px] md:h-max lg:w-[280px] lg:h-max xl:w-[253px]  bg-[#121212]
           rounded xl:rounded-[20px] border border-[#3F5EFB] border-opacity-20 cursor-pointer">
          <div className="w-max xl:w-[250px] xl:h-[350px]">
            <div
              className="absolute "
              onClick={() => handelNavgateSinglePage(item)}>
              <Image
                src={item?.poster}
                alt="image"
                width={250}
                height={250}
                className="w-[80px] h-max sm:w-[130px] md:w-[170px] lg:w-[280px]  xl:w-[253px] xl:h-max"
              />
            </div>
            <div className="relative ml-[50px] top-2 sm:ml-[90px] sm:top-3 md:ml-[125px] lg:ml-[200px] lg:top-6 w-max xl:ml-[160px] xl:top-5 flex justify-center items-center gap-1 sm:gap-2">
              <h1 className="text-[10px] sm:text-[12px] xl:font-bold lg:text-xl lg:font-semibold xl:text-2xl">
                4.5
              </h1>
              <FaStar className="text-[10px] sm:text-[12px] lg:text-xl xl:text-2xl text-yellow-400" />
            </div>
          </div>
          <div className="flex item-center justify-between flex-col mt-[90px] sm:mt-[155px] md:mt-[210px] lg:mt-[360px] lg:my-2 xl:mt-0 px-1 py-1 ">
            <h1 className="text-[12px] sm:font-semibold sm:text-[14px] md:text-[12px] md:font-semibold lg:text-xl xl:text-xl xl:font-semibold">
              Delysium
            </h1>
            <p className="text-[8px] text-ellipsis overflow-hidden truncate  sm:text-[10px] md:text-[12px] lg:text-[12px]  xl:font-normal xl:text-[14px]">
              Shooter, Battle Royale
            </p>
            <p className="h-[1px] line my-1 xl:my-2 opacity-65"></p>
            <div className="flex justify-between items-center gap-1">
              <div className="flex gap-1">
                <SlGlobe className="text-[10px] sm:text-[14px] md:text-lg lg:text-xl xl:text-2xl" />
                <FaApple className="text-[10px] sm:text-[14px] md:text-lg lg:text-xl xl:text-2xl" />
                <IoLogoAndroid className="text-[10px] sm:text-[14px] md:text-lg lg:text-xl xl:text-2xl" />
              </div>
              <div>
                <button
                  className="bg-[#7B25C1] text-[8px] sm:text-[10px] md:text-[10px]
                lg:text-[14px] xl:text-[14px] md:py-1 md:px-3 px-2 xl:px-4 xl:py-2 rounded-[20px]">
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
