import Image from "next/image";
import React from "react";
import feed from "../asserts/feed1.png";
import feedUser from "../asserts/feeduser1.png";

const TwitchFeed = () => {
  return (
    <div className="w-[150px] xl:w-[262px] my-5 xl:my-10">
      <div>
        <Image
          src={feed}
          width={500}
          height={500}
          alt="feedimg"
          className="w-[150px] xl:w-[500px]"
        />
      </div>
      <div>
        <div className="flex items-center">
          <Image
            src={feedUser}
            width={40}
            height={40}
            alt="feedimg"
            className="w-[20px] xl:w-[40px]"
          />
          <h1 className="text-[10px] xl:text-[16px] font-semibold text-ellipsis truncate">
            COCINANDO NUEVO EQUIP...
          </h1>
        </div>
        <div className="flex justify-between text-[8px] xl:text-[10px]  px-5">
          <p>CryptoKid</p>
          <p>tokens</p>
        </div>
      </div>
    </div>
  );
};

export default TwitchFeed;
