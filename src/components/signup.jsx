import React from "react";

const Signup = () => {
  return (
    <div className="h-[686px] bg-[#060606] text-white flex justify-center items-center text-center ">
      <div className="w-[737px] flex flex-col gap-5">
        <h1 className="font-medium text-[35px]">
          Join the web3 gaming revolution today!
        </h1>
        <p className="font-medium text-[18px]">
          Discover new games, buy and sell NFTs, and connect with other gamers
          on our decentralized gaming marketplace.{" "}
        </p>
        <div className="mt-8">
          <button className="w-[417px] h-[54px] rounded-full bg-[#3772FF]">
            Sign up now to start gaming in the future!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
