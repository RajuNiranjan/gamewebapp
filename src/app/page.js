import CommingSoon from "@/components/homeComps/commingSoon";
import Explore from "@/components/homeComps/explore";
import FeaturedClans from "@/components/homeComps/featured-clans";
import FeaturedGames from "@/components/homeComps/featured-games";
import HomeSlider from "@/components/homeComps/homeSlider";
import NewReleased from "@/components/homeComps/new-release";
import Quest from "@/components/homeComps/quest";
import Signup from "@/components/homeComps/signup";
import Spotlight from "@/components/homeComps/spotlight";
import TopPlayed from "@/components/homeComps/topPlayed";

const Home = () => {
  return (
    <div>
      <div className=" bg-[#121212] px-10 xl:px-20 py-10 text-white">
        <HomeSlider />
        <FeaturedGames />
        <Spotlight />
        <FeaturedClans />
        <Quest />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-20">
          <NewReleased />
          <CommingSoon />
          <TopPlayed />
        </div>
        <Spotlight />
        <Explore />
      </div>
      <Signup />
    </div>
  );
};

export default Home;
