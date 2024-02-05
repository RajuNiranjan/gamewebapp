"use client";
import BannerComponent from "@/components/IndividualGameComps/BannerComponent";
import BelowBannerComponent from "@/components/IndividualGameComps/BelowBannerComponent";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";


const Home = () => {

  const [details, setDetails] = useState()

  const pathname = usePathname();
  console.log(pathname)

  useEffect(()=>{

    const allPaths = pathname.split('/')
    console.log(allPaths[2])

    axios.post('https://indigbackendtwo.onrender.com/games/find-by-id',{ id: allPaths[2]}).
    then((res)=>{
      console.log(res.data)
      setDetails(res.data)
    }).catch((err)=>{
      console.log(err)
    })

  },[pathname])

 
  return (
    <div className="w-full bg-[#121212] py-[30px]">
      <BannerComponent details={details} />

      <BelowBannerComponent details={details} />
    </div>
  );
};

export default Home;
