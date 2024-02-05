import Image from "next/image";
import React from "react";
import image from "../asserts/cover.png";

const Cover = () => {
  return (
    <div>
      <div className=" my-5 w-[160px] sm:w-[300px] md:w-[300px] lg:w-[450px] xl:h-[450px] xl:w-[540px] 2xl:w-[550px]">
        <div>
          <Image
            src={image}
            alt="image"
            width={550}
            height={350}
            className="hover:opacity-75 w-[160px] sm:w-[300px] md:w-[300px] lg:w-[450px] xl:w-[540px] 2xl:w-[550px]"
          />
        </div>
        <div className="mt-2">
          <h1 className="font-bold text-[12px] md:text-[22px] lg:text-[24px] xl:text-[27px]">
            Life Beyond
          </h1>
          <p className="font-medium text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]">
            Life Beyond is a sci-fi metaverse powered by Unreal Engine, NFTs,
            and ERC-20 tokens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
