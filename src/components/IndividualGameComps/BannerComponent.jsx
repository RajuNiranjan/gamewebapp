import React from "react";
import Banner from "@/asserts/IndividualTempBanner.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const BannerComponent = () => {
  return (
    <div className="w-[100%] h-[30vh] sm:h-[60vh] md:h-[80vh] xl:h-[80vh] mx-auto relative">
      <Image
        src={Banner}
        alt="Banner"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      <div
        className="w-full h-full absolute top-0 left-0 z-10"
        style={{
          fill: "linear-gradient(224deg, rgba(0, 0, 0, 0.00) 25.6%, rgba(0, 0, 0, 0.44) 64.9%)",
          strokeWidth: "1px",
          stroke: "#181818",
        }}
      />

      <div className="absolute left-5 top-32 sm:top-20 md:top-64 sm:left-10 lg:top-60 lg:left-10  xl:left-[50px] xl:bottom-[50px] text-white z-0">
        <p className="text-[12px] sm:text-[24px] xl:text-[54px] xl:font-[500] sm:font-semibold">
          Gods Unchained
        </p>

        <div
          className="flex items-center text-[25px] font-[600] gap-[10px]"
          style={{
            textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}>
          <p className="text-[12px]">5.0</p>

          <div className="text-[12px] text-yellow-400">
            <FaStar />
          </div>

          <p className="text-[12px]">1.3k Reviews</p>
        </div>

        <p className="text-[10px]">
          Gods Unchained is a free-to-play cards trading game where players
          compete in epic <br /> duels using fantasy cards
        </p>

        <button className="text-[12px] h-[20px] flex justify-center items-center w-[50px] sm:px-7 py-1 xl:w-[100px]  xl:px-[22px] xl:py-[10px]] rounded-full bg-[#7B25C1] mt-[10px] md:py-4 sm:py-4 lg:py-5">
          play
        </button>
      </div>
    </div>
  );
};

export default BannerComponent;
