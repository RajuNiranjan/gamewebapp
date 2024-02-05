"use client";
import React from "react";
import img from "../asserts/clan.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import "../app/globals.css";
import { useContext } from "react";
import { GlobalContext } from "@/context/context";
import { useRouter } from "next/navigation";

const ClanCard = () => {
  const { singlePost, setSingleMovieData } = useContext(GlobalContext);
  const router = useRouter();

  const handelNavgateSinglePage = (item) => {
    router.push(`/IndividualGame/${item?.id}`);
    setSingleMovieData(item);
  };
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-10 xl:gap-y-10 mt-10  ">
      {singlePost?.map((item, index) => (
        <div
          key={index}
          className="w-[110px] h-max sm:w-[110px]  md:w-[230px] xl:w-[253px]  bg-[#121212] rounded-md xl:rounded-[20px] border border-[#3F5EFB] border-opacity-20 cursor-pointer ">
          <div className="w-max xl:w-[250px] xl:h-[350px]">
            <div className="absolute">
              <Image
                onClick={() => handelNavgateSinglePage(item)}
                src={item?.poster}
                alt="image"
                width={250}
                height={250}
                className="w-[109px] h-max sm:w-[110px] sm:h-[200px] md:w-[230px]  xl:w-[250px] xl:h-max"
              />
            </div>
            <div className="relative md:ml-[130px]  xl:ml-[30px] top-2 left-[65px] xl:top-5 flex justify-center items-center gap-1">
              <h1 className="text-[8px] xl:text-[10px] xl:px-3 xl:h-[20px] flex justify-center items-center border px-2 rounded-full border-green-500 xl:font-bold xl:text-3xl">
                Live
              </h1>
            </div>
          </div>
          <div className="flex item-center justify-between flex-col mt-[130px] sm:mt-[140px] p-1  sm:px-2 md:mt-[300px] md:px-3 xl:mt-0">
            <h1 className=" text-[12px] sm:text-[14px] md:text-xl xl:text-2xl font-semibold">
              Red devil
            </h1>
            <div className="flex flex-col text-gray-500 md:text-white justify-start items-start sm:flex-col md:flex-row md:justify-between sm:justify-start sm:items-start ">
              <span className="font-normal text-[10px] sm:text-[10px] md:text-[12px] lg:text-[10px] xl:text-[14px]">
                Anouncement
              </span>
              <span className="font-normal text-[10px] sm:text-[10px] md:text-[12px] lg:text-[10px] xl:text-[14px]">
                Featured
              </span>
            </div>
            <p className="h-[1px] line my-2 opacity-65 hidden md:inline-block"></p>
            <div className="hidden md:inline-flex flex  flex-col md:flex-row items-start justify-between gap-1 md:items-center">
              <div className="md:flex md:justify-start hidden sm:inline-block">
                <RiMoneyDollarCircleFill className="text-[10px] sm:text-[12px] md:text-[12px] xl:text-[14px]" />
                <div className="flex flex-row items-center md:flex-col">
                  <span className="font-normal text-[5px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[12px]">
                    Reward
                  </span>
                  <span className="font-normal text-[4px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[12px]">
                    USD 130$
                  </span>
                </div>
              </div>
              <div className="md:flex md:justify-start gap-[2px] hidden sm:inline-block">
                <RiMoneyDollarCircleFill className="text-[10px] sm:text-[12px] md:text-[12px] xl:text-[14px]" />
                <div className="flex flex-row md:flex-col items-center ">
                  <span className="font-normal text-[5px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[12px]">
                    Reward
                  </span>
                  <span className="font-normal text-[4px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[12px]">
                    USD 130$
                  </span>
                </div>
              </div>
              <div className="md:flex md:justify-start gap-[2px] hidden sm:inline-block">
                <RiMoneyDollarCircleFill className="text-[10px] sm:text-[12px] md:text-[12px] xl:text-[14px]" />
                <div className="flex flex-row md:items-center sm:flex-col items-center ">
                  <span className="font-normal text-[5px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[12px]">
                    Reward
                  </span>
                  <span className="font-normal text-[4px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[12px]">
                    USD 130$
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClanCard;
