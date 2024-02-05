"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { SlGlobe } from "react-icons/sl";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import "../app/globals.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const Card = ({ singlePost, setSingleMovieData }) => {

  const router = useRouter();

  const handelNavgateSinglePage = (item) => {
    // router.push(`/IndividualGame/${item?.id}`);
    setSingleMovieData(item);
    console.log("item")
  };

  const [allgameLists, setAllGameLists] = useState([])

  useEffect(()=>{

    axios.get('https://indigbackendtwo.onrender.com/games')
    .then((res)=>{
      console.log(res.data)
      setAllGameLists(res.data)
    }).catch((err)=>{
      console.log(err)
    })

  },[])

  return (
    <div
      className="grid grid-cols-3 sm:grid-cols-4 gap-5  md:grid-cols-4 lg:grid-cols-3
     xl:grid-cols-4 2xl:grid-cols-5 ">
      {allgameLists?.map((item, index) => (
        <Link
        href={`/IndividualGame/${item?._id}`}
          key={index}
          className="w-[110px] h-max sm:w-[130px]  md:w-[170px] md:h-max lg:w-[280px] lg:h-max xl:w-[253px]  bg-[#121212]
            xl:rounded-[20px] border border-[#3F5EFB] border-opacity-20 cursor-pointer ">
          <div className="w-max xl:w-[250px] xl:h-[350px]">
            <div
              className="absolute"
              // onClick={() => handelNavgateSinglePage(item)}
              >
              <Image
                src={item?.game_banner}
                alt="image"
                width={250}
                height={250}
              className="w-[109px] h-[150px] rounded-sm  sm:w-[130px] sm:h-[180px] md:w-[170px] md:h-[220px]  lg:w-[280px] lg:h-[380px]   xl:w-[253px] xl:h-[350px] object-cover "
              />
            </div>
            <div className="relative ml-[50px] top-2 sm:ml-[90px] sm:top-3 md:ml-[125px] lg:ml-[200px] lg:top-6 w-max xl:ml-[160px] xl:top-5 flex justify-center items-center gap-1 sm:gap-2">
              <h1 className="text-[10px] sm:text-[12px] xl:font-bold lg:text-xl lg:font-semibold xl:text-2xl">
                {item?.game_rating}
              </h1>
              <FaStar className="text-[10px] sm:text-[12px] lg:text-xl xl:text-2xl text-yellow-400" />
            </div>
          </div>
          <div className="flex item-center justify-between flex-col mt-[140px] sm:mt-[155px] md:mt-[210px] lg:mt-[360px] lg:my-2 xl:mt-0 px-1 py-1 ">
            <h1 className="text-[12px] sm:font-semibold sm:text-[14px] md:text-[12px] md:font-semibold lg:text-xl xl:text-xl xl:font-semibold">
              {item?.game_name}
            </h1>
            <p className="text-[10px] text-ellipsis overflow-hidden truncate  sm:text-[12px] md:text-[12px] lg:text-[12px]  xl:font-normal xl:text-[14px] flex items-center gap-[10px]">
              {item?.game_category.map((category)=>{
                return(
                  <span key={category}>{category}</span>
                )
              })}
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
        </Link>
      ))}
    </div>
  );
};

export default Card;
