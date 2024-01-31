import React from "react";
import "../app/globals.css";
import game1 from "../asserts/game4.png";
import game2 from "../asserts/game1.png";
import game3 from "../asserts/game2.png";
import game4 from "../asserts/game3.png";
import Image from "next/image";

const Explore = () => {
  return (
    <div className="flex justify-between items-center  h-[800px]">
      <div>
        <Image
          src={game1}
          width={200}
          alt="image"
          height={200}
          className="relative"
        />
        <Image
          src={game2}
          width={200}
          alt="image"
          height={200}
          className="absolute mt-[-200px] ml-32"
        />
        <Image
          src={game3}
          width={200}
          alt="image"
          height={200}
          className="absolute mt-[-160px] ml-72"
        />
        <Image
          src={game4}
          width={200}
          alt="image"
          height={200}
          className="absolute mt-[-120px] ml-[28rem]"
        />
      </div>
      <div className="w-[430px] h-[47px] flex flex-col gap-3">
        <h1 className="font-medium text-[32px]">Explore our Catalog </h1>
        <p className="font-normal text-[20px]">
          Rows by genre, features, price, and more to find your next favourite
          game. Rows by genre, features, price, and more to find your next
          favourite game.
        </p>
        <div>
          <button className="w-[223px] h-[53px] text-[16px] font-medium bg-[#7B25C1] rounded-full mt-10">
            Explore all Games
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
