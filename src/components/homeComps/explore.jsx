import React from "react";
import "../../app/globals.css";
import game1 from "../../asserts/game4.png";
import game2 from "../../asserts/game1.png";
import game3 from "../../asserts/game2.png";
import game4 from "../../asserts/game3.png";
import Image from "next/image";

const Explore = () => {
  return (
    <div
      className="flex flex-col xl:flex-row justify-between
     sm:items-center md:items-center sm:flex-col md:flex-row lg:flex-row  xl:items-center h-max  xl:h-[800px] ">
      <div className="h-[200px] md:w-[600px] ">
        <Image
          src={game1}
          width={200}
          alt="image"
          height={200}
          className="relative w-[70px] xl:w-[200px]"
        />
        <Image
          src={game2}
          width={200}
          alt="image"
          height={200}
          className="absolute  w-[70px] mt-[-70px] ml-[60px] xl:w-[200px] xl:mt-[-200px]  xl:ml-32"
        />
        <Image
          src={game3}
          width={200}
          alt="image"
          height={200}
          className="absolute  w-[70px] mt-[-50px] ml-[120px] xl:w-[200px] xl:mt-[-160px]  xl:ml-72"
        />
        <Image
          src={game4}
          width={200}
          alt="image"
          height={200}
          className="absolute  w-[70px] mt-[-30px] ml-[180px] xl:w-[200px] xl:mt-[-120px]  xl:ml-[28rem]"
        />
      </div>
      <div className="xl:w-[430px] xl:h-[47px] flex flex-col gap-3">
        <h1 className="font-medium text-[14px] xl:text-[32px]">
          Explore our Catalog{" "}
        </h1>
        <p className="font-normal text-[12px] xl:text-[20px]">
          Rows by genre, features, price, and more to find your next favourite
          game. Rows by genre, features, price, and more to find your next
          favourite game.
        </p>
        <div>
          <button className="px-5  py-1 xl:w-[223px] xl:h-[53px] xl:text-[16px] font-medium bg-[#7B25C1] rounded-full xl:mt-10">
            Explore all Games
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
