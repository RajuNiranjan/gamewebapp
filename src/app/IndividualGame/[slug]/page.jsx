"use client";
import BannerComponent from "@/components/IndividualGameComps/BannerComponent";
import BelowBannerComponent from "@/components/IndividualGameComps/BelowBannerComponent";
import React from "react";

const page = () => {

  // const pathname = usePathname();
  // console.log(pathname)


 
  return (
    <div className="w-full bg-[#121212] py-[30px]">
      <BannerComponent details={details} />

      <BelowBannerComponent details={details} />
    </div>
  );
};

export default page;
