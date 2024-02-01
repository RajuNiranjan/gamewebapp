import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import "../app/globals.css";

const footerData = [
  {
    id: 1,
    heading: "Company",
    items: ["careers", "About us", "Blog"],
  },
  {
    id: 2,
    heading: "Help",
    items: ["Support", "Term & Conditions", "Privacy Policy"],
  },
  {
    id: 3,
    heading: "Information",
    items: ["Link-", "Link-", "Link-"],
  },
  {
    id: 4,
    heading: "Resources",
    items: ["Game", "Clans", "Quests"],
  },
  {
    id: 5,
    heading: "Developers",
    items: ["Documents", "indi.gg"],
  },

  {
    id: 6,
    heading: "Products",
    items: ["Product 1", "Product 2", "Product 3", "Product 4"],
  },
];

const Footer = () => {
  return (
    <footer className="h-max  xl:h-[689px] bg-[#060606] text-white flex flex-col justify-between">
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 text-[12px] px-10 gap-10 md:grid-cols-6 lg:grid-cols-6  xl:grid-cols-6 xl:gap-20">
          {footerData?.map((item, index) => (
            <div key={index}>
              <p className="mb-3 font-semibold">{item?.heading}</p>
              {item?.items?.map((item) => (
                <ul className="text-left opacity-75" key={item}>
                  <li className="my-2">{item}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="hr h-[1px]"></p>
        <div className="text-white flex flex-col sm:flex-row sm:justify-center sm:gap-5 md:flex-row md:justify-center md:gap-10 py-3   xl:justify-center items-center  xl:py-10 xl:gap-20  ">
          <p className="text-[10px]">Copyright 2023. Designed by Mancunianz</p>
          <ul className="flex justify-center items-center gap-5">
            <li className="h-7 w-7 xl:w-16 xl:h-16 flex justify-center items-center linearGradient">
              <IoLogoTwitter className="h-3 w-3 xl:h-7 xl:w-7" />
            </li>
            <li className="h-7 w-7 xl:w-16 xl:h-16 flex justify-center items-center linearGradient">
              <FaLinkedinIn className="h-3 w-3 xl:h-7 xl:w-7" />
            </li>
            <li className="h-7 w-7 xl:w-16 xl:h-16 flex justify-center items-center linearGradient">
              <AiFillInstagram className="h-3 w-3 xl:h-7 xl:w-7" />
            </li>
            <li className="h-7 w-7 xl:w-16 xl:h-16 flex justify-center items-center linearGradient">
              <FaYoutube className="h-3 w-3 xl:h-7 xl:w-7" />
            </li>
            <li className="h-7 w-7 xl:w-16 xl:h-16 flex justify-center items-center linearGradient">
              <IoLogoWhatsapp className="h-3 w-3 xl:h-7 xl:w-7" />
            </li>
            <li className="h-7 w-7 xl:w-16 xl:h-16 flex justify-center items-center linearGradient">
              <FaGithub className="h-3 w-3 xl:h-7 xl:w-7" />
            </li>
          </ul>
          <div className="flex">
            <p className="text-[10px]">Privacy Policy</p>
            <p className="text-[10px]">Term & Condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
