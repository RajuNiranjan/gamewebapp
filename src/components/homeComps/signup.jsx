import React from "react";

const Signup = () => {
  return (
    <div className="lg-[686px] xl:h-[686px] bg-[#060606] text-white flex justify-center items-center text-center py-10">
      <div className="px-5 w-[737px] flex flex-col gap-1 xl:gap-5">
        <h1 className="font-medium  text-[16px] sm:text-[24px] md:text-[26px] lg:text-[30px] xl:text-[35px]">
          Join the web3 gaming revolution today!
        </h1>
        <p className="font-medium  text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          Discover new games, buy and sell NFTs, and connect with other gamers
          on our decentralized gaming marketplace.{" "}
        </p>
        <div className="mt-4 xl:mt-8">
          <button className="px-5  py-2 mb-3 xl:w-[417px] xl:h-[54px] rounded-full bg-[#3772FF]">
            Sign up now to start gaming in the future!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
