"use client";
import React, { useState } from "react";
// import ImageOne from "@/asserts/gamedemoscreenone.png";
// import ImageTwo from "@/asserts/gamedemoscreentwo.png";
// import ImageThree from "@/asserts/gamedemoscreenthree.png";
// import ImageFour from "@/asserts/gamedemoscreenfour.png";
import Image from "next/image";
import { TbCoinBitcoin } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";

const GameScreenShots = ({ details }) => {

  // const ImageOne = details?.game_screenShots[0]
  // const ImageTwo = details?.game_screenShots[1]
  // const ImageThree = details?.game_screenShots[2]
  // const ImageFour = details?.game_screenShots[3]

  const [activeImage, setActiveImage] = useState(details?.game_screenShots[0]);
if(details){
  console.log(details)
  }

  return (
    <div className="w-full mt-[40px] flex flex-col gap-[20px]">
      <Image
        src={activeImage}
        alt="Active Game screen"
        className="w-full h-auto object-cover"
        width={400}
        height={400}
      />

      <div className="w-full grid grid-cols-4 gap-[4px]">
        <Image
          src={details?.game_screenShots[0]}
          alt="First screen"
          className="w-full h-auto object-cover cursor-pointer"
          width={400}
          height={400}
          onClick={() => {
            setActiveImage(details?.game_screenShots[0]);
          }}
        />

        <Image
          src={details?.game_screenShots[1]}
          alt="Second screen"
          className="w-full h-auto object-cover cursor-pointer"
          width={400}
          height={400}
          onClick={() => {
            setActiveImage(details?.game_screenShots[1]);
          }}
        />

        <Image
          src={details?.game_screenShots[2]}
          alt="Three screen"
          className="w-full h-auto object-cover cursor-pointer"
          width={400}
          height={400}
          onClick={() => {
            setActiveImage(details?.game_screenShots[2]);
          }}
        />

        <Image
          src={details?.game_screenShots[3]}
          alt="Fourth screen"
          className="w-full h-auto object-cover cursor-pointer"
          width={400}
          height={400}
          onClick={() => {
            setActiveImage(details?.game_screenShots[3]);
          }}
        />
      </div>

      <div className="w-full grid gap-[20px] grid-cols-1 xl:grid-cols-3">
        <div className="w-full bg-[#212121] rounded-[8px] p-3 xl:px-[20px] xl:py-[16px]">
          <p className="xl:text-[20px] font-[500]">Reviews</p>

          <div className="w-full flex items-center justify-between">
            <p className=" xl:text-[48px] xl:font-[700] ">4.0</p>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="18"
                viewBox="0 0 96 18"
                fill="none">
                <path
                  d="M8.42937 1.75623C8.60898 1.20345 9.39102 1.20344 9.57063 1.75623L10.8859 5.80426C10.9662 6.05147 11.1966 6.21885 11.4566 6.21885H15.7129C16.2941 6.21885 16.5358 6.96262 16.0656 7.30426L12.6221 9.80608C12.4118 9.95886 12.3238 10.2297 12.4042 10.4769L13.7194 14.5249C13.899 15.0777 13.2664 15.5374 12.7961 15.1957L9.35267 12.6939C9.14238 12.5411 8.85762 12.5411 8.64733 12.6939L5.20387 15.1957C4.73364 15.5374 4.10096 15.0777 4.28057 14.5249L5.59585 10.4769C5.67617 10.2297 5.58818 9.95886 5.37789 9.80608L1.93443 7.30426C1.4642 6.96262 1.70587 6.21885 2.2871 6.21885H6.54345C6.80338 6.21885 7.03376 6.05147 7.11408 5.80426L8.42937 1.75623Z"
                  fill="#F5E01F"
                />
                <path
                  d="M27.6286 1.75623C27.8082 1.20345 28.5902 1.20344 28.7699 1.75623L30.0851 5.80426C30.1655 6.05147 30.3958 6.21885 30.6558 6.21885H34.9121C35.4934 6.21885 35.735 6.96262 35.2648 7.30426L31.8213 9.80608C31.611 9.95886 31.523 10.2297 31.6034 10.4769L32.9187 14.5249C33.0983 15.0777 32.4656 15.5374 31.9953 15.1957L28.5519 12.6939C28.3416 12.5411 28.0568 12.5411 27.8465 12.6939L24.4031 15.1957C23.9329 15.5374 23.3002 15.0777 23.4798 14.5249L24.7951 10.4769C24.8754 10.2297 24.7874 9.95886 24.5771 9.80608L21.1336 7.30426C20.6634 6.96262 20.9051 6.21885 21.4863 6.21885H25.7427C26.0026 6.21885 26.233 6.05147 26.3133 5.80426L27.6286 1.75623Z"
                  fill="#F5E01F"
                />
                <path
                  d="M46.8278 1.75623C47.0074 1.20345 47.7895 1.20344 47.9691 1.75623L49.2844 5.80426C49.3647 6.05147 49.5951 6.21885 49.855 6.21885H54.1113C54.6926 6.21885 54.9342 6.96262 54.464 7.30426L51.0206 9.80608C50.8103 9.95886 50.7223 10.2297 50.8026 10.4769L52.1179 14.5249C52.2975 15.0777 51.6648 15.5374 51.1946 15.1957L47.7511 12.6939C47.5408 12.5411 47.2561 12.5411 47.0458 12.6939L43.6023 15.1957C43.1321 15.5374 42.4994 15.0777 42.679 14.5249L43.9943 10.4769C44.0746 10.2297 43.9866 9.95886 43.7763 9.80608L40.3329 7.30426C39.8626 6.96262 40.1043 6.21885 40.6855 6.21885H44.9419C45.2018 6.21885 45.4322 6.05147 45.5125 5.80426L46.8278 1.75623Z"
                  fill="#F5E01F"
                />
                <path
                  d="M66.0309 1.75623C66.2105 1.20345 66.9926 1.20344 67.1722 1.75623L68.4875 5.80426C68.5678 6.05147 68.7982 6.21885 69.0581 6.21885H73.3145C73.8957 6.21885 74.1374 6.96262 73.6671 7.30426L70.2237 9.80608C70.0134 9.95886 69.9254 10.2297 70.0057 10.4769L71.321 14.5249C71.5006 15.0777 70.8679 15.5374 70.3977 15.1957L66.9542 12.6939C66.7439 12.5411 66.4592 12.5411 66.2489 12.6939L62.8054 15.1957C62.3352 15.5374 61.7025 15.0777 61.8821 14.5249L63.1974 10.4769C63.2777 10.2297 63.1897 9.95886 62.9794 9.80608L59.536 7.30426C59.0658 6.96262 59.3074 6.21885 59.8887 6.21885H64.145C64.4049 6.21885 64.6353 6.05147 64.7156 5.80426L66.0309 1.75623Z"
                  fill="#F5E01F"
                />
                <path
                  d="M86.4294 1.75623C86.609 1.20345 87.391 1.20344 87.5706 1.75623L88.8859 5.80426C88.9662 6.05147 89.1966 6.21885 89.4566 6.21885H93.7129C94.2941 6.21885 94.5358 6.96262 94.0656 7.30426L90.6221 9.80608C90.4118 9.95886 90.3238 10.2297 90.4042 10.4769L91.7194 14.5249C91.899 15.0777 91.2664 15.5374 90.7961 15.1957L87.3527 12.6939C87.1424 12.5411 86.8576 12.5411 86.6473 12.6939L83.2039 15.1957C82.7336 15.5374 82.101 15.0777 82.2806 14.5249L83.5958 10.4769C83.6762 10.2297 83.5882 9.95886 83.3779 9.80608L79.9344 7.30426C79.4642 6.96262 79.7059 6.21885 80.2871 6.21885H84.5434C84.8034 6.21885 85.0338 6.05147 85.1141 5.80426L86.4294 1.75623Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#212121] h-full flex flex-col justify-between rounded-[8px] p-3 xl:px-[20px] xl:py-[16px]">
          <p className="xl:text-[20px] font-[500]">Blockchain</p>

          <TbCoinBitcoin className="md:text-[32px] xl:text-[50px] my-2" />
        </div>

        <div className="w-full bg-[#212121] h-full flex flex-col justify-between rounded-[8px] p-3 xl:px-[20px] xl:py-[16px]">
          <p className="xl:text-[20px] font-[500]">Blockchain</p>

          <div className="flex gap-[10px] items-center my-2">
            <BsGlobe className="md:text-[32px] xl:text-[50px]" />
            <FaApple className="md:text-[32px] xl:text-[50px]" />
            <GrAndroid className="md:text-[32px] xl:text-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreenShots;
