import Explore from "@/components/explore";
import FeaturedClans from "@/components/featured-clans";
import FeaturedGames from "@/components/featured-games";
import Quest from "@/components/quest";
import Signup from "@/components/signup";
import Spotlight from "@/components/spotlight";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className=" bg-[#121212] px-20 py-10 text-white">
        <FeaturedGames />
        <Spotlight />
        <FeaturedClans />
        <Quest />
        <Spotlight />
        <Explore />
      </div>
      <Signup />
    </div>
  );
};

export default Home;
