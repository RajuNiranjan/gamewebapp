"use client";
import BannerComponent from "@/components/IndividualGameComps/BannerComponent";
import BelowBannerComponent from "@/components/IndividualGameComps/BelowBannerComponent";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-[#121212] py-[30px]">
      <BannerComponent />

      <BelowBannerComponent />
    </div>
  );
};

export default page;
