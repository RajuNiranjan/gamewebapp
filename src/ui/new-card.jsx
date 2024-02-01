import Image from "next/image";
import React from "react";
import newGame from "../asserts/new.png";

const NewCard = () => {
  return (
    <div className="flex gap-3">
      <div>
        <Image src={newGame} alt="newGame" width={200} height={200} />
      </div>
      <div>
        <h1 className="font-semibold text-[21px]">Heroes of Mavia</h1>
        <p className="w-[273px] text-[16px] font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
          dolores.
        </p>
        <p className="text-[#737A99] text-[16px] font-normal">
          Released 7 days ago
        </p>
        <div>
          <button className="px-[17px] py-[7px] bg-[#7B25C1] rounded-full">
            play
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
