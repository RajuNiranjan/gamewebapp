import Image from "next/image";
import React from "react";
import newGame from "../asserts/new.png";

const NewCard = () => {
  return (
    <div className="flex my-4 xl:gap-3 gap-3 hover:bg-slate-900 rounded-xl">
      <div>
        <Image
          src={newGame}
          alt="newGame"
          width={200}
          height={200}
          className="h-[100px] w-[300px] lg:[200px] xl:w-[200px]"
        />
      </div>
      <div>
        <h1 className="font-semibold xl:text-[21px]">Heroes of Mavia</h1>
        <p className="xl:w-[273px] text-[12px] xl:text-[16px] font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
          dolores.
        </p>
        <p className="text-[#737A99] text-[12px] xl:text-[16px] font-normal">
          Released 7 days ago
        </p>
        <div>
          <button className="w-[50px] text-[12px] rounded-md xl:w-50px xl:py-[4px] bg-[#7B25C1] xl:rounded-full">
            play
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
