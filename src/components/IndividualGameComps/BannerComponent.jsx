import React from "react";
import Banner from "@/asserts/IndividualTempBanner.png";
import Image from "next/image";

const BannerComponent = () => {
  return (
    <div className="w-[90%] h-[80vh] mx-auto relative">
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

      <div className="absolute left-[50px] bottom-[50px] text-white z-0">
        <p className="text-[54px] font-[500]">Gods Unchained</p>

        <div
          className="flex items-center text-[25px] font-[600] gap-[10px]"
          style={{
            textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}>
          <p>5.0</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="31"
            viewBox="0 0 38 31"
            fill="none">
            <path
              d="M18.8548 0.502686L23.1748 11.9599H37.1546L25.8447 19.0409L30.1647 30.4981L18.8548 23.4171L7.54492 30.4981L11.8649 19.0409L0.555027 11.9599H14.5348L18.8548 0.502686Z"
              fill="#F5E01F"
            />
          </svg>

          <p>1.3k Reviews</p>
        </div>

        <p>
          Gods Unchained is a free-to-play cards trading game where players
          compete in epic <br /> duels using fantasy cards
        </p>

        <button className="w-fit px-[22px] py-[10px] rounded-full bg-[#7B25C1] mt-[10px]">
          play
        </button>
      </div>
    </div>
  );
};

export default BannerComponent;
