import Image from "next/image";
import React from "react";
import image from "../asserts/cover.png";

const Cover = () => {
  return (
    <div>
      <div className="mt-10 h-[450px] w-[550px]">
        <div>
          <Image
            src={image}
            alt="image"
            width={550}
            height={3850}
            className="hover:opacity-75"
          />
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-[27px]">Life Beyond</h1>
          <p className="font-medium text-[20px]">
            Life Beyond is a sci-fi metaverse powered by Unreal Engine, NFTs,
            and ERC-20 tokens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
