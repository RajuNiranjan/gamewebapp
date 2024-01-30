import FeaturedGames from "@/components/featured-games";
import Signup from "@/components/signup";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-[11037px] bg-[#121212] px-20 py-10">
        <FeaturedGames />
      </div>
      <Signup />
    </div>
  );
};

export default Home;
