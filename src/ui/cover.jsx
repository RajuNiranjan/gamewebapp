import Image from "next/image";
import React from "react";
import image from "../asserts/cover.png";

const Cover = () => {
  return (
    <div>
      <div className="mt-10 w-[120px] sm:w-[300px] md:w-[300px] lg:w-[450px] xl:h-[450px] xl:w-[550px]">
        <div>
          <Image
            src={image}
            alt="image"
            width={550}
            height={3850}
            className="hover:opacity-75 w-[150px] sm:w-[300px] md:w-[300px] lg:w-[400px]"
          />
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-[9px] md:text-[22px] lg:text-[24px] xl:text-[27px]">
            Life Beyond
          </h1>
          <p className="font-medium text-[6px] md:text-[14px] lg:text-[16px] xl:text-[20px]">
            Life Beyond is a sci-fi metaverse powered by Unreal Engine, NFTs,
            and ERC-20 tokens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
