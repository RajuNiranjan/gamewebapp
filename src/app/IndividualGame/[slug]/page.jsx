"use client";
import BannerComponent from "@/components/IndividualGameComps/BannerComponent";
import BelowBannerComponent from "@/components/IndividualGameComps/BelowBannerComponent";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {

  const pathname = usePathname();
  console.log(pathname)

  console.log(router)

  return (
    <div className="w-full bg-[#121212] py-[30px]">
      <BannerComponent />

      <BelowBannerComponent />
    </div>
  );
};

export default page;
