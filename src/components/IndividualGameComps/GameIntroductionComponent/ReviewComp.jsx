"use client";
import React from "react";
import Review from "./Review";

const ReviewComp = () => {
  return (
    <div className="w-full text-white my-5">
      <div className="w-full flex items-center justify-between my-5">
        <p className="font-[500]  xl:text-[44px]">Reviews</p>

        <button
          name="write a review button"
          className="bg-[#7B25C1] rounded-full px-[10px] py-[3px] text-[10px] xl:px-[20px] xl:py-[10px]">
          Write a review
        </button>
      </div>

      <div className="w-full flex flex-col gap-[6px]">
        <Review />

        <Review />

        <Review />
      </div>
    </div>
  );
};

export default ReviewComp;
