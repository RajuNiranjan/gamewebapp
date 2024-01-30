"use client";
import Image from "next/image";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../asserts/logo.png";
import { CiSearch } from "react-icons/ci";
import { LuBell } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navgarionData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Games",
    path: "/games",
  },
  {
    id: 3,
    name: "Clans",
    path: "/clans",
  },
  {
    id: 4,
    name: "Quests",
    path: "/quests",
  },
];

const Navbar = () => {
  const pathName = usePathname();

  const active = "font-semibold text-white ";
  const deactive = "font-semibold text-white opacity-55";

  return (
    <nav className="h-[80px] bg-[#212121] w-full text-white px-10 flex justify-between items-center sticky top-0 z-10">
      <div className="flex justify-center items-center gap-5">
        <div>
          <CiMenuBurger className="text-2xl" />
        </div>
        <div>
          <Image src={logo} alt="logo" width={59} height={59} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between px-5 w-[598px] h-[41px] bg-[#3E3E3E] rounded-3xl">
          <input
            type="text"
            placeholder="Search INDIGG"
            className="bg-transparent focus:outline-none"
          />
          <CiSearch />
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div>
          <ul className="flex items-center justify-center gap-5">
            {navgarionData?.map((item, index) => (
              <Link
                className={`${pathName === item?.path ? active : deactive}`}
                key={index}
                href={item?.path}>
                <li>{item?.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <div className="relative w-11 h-11 flex justify-center items-center bg-[#35314D] rounded-full">
            <LuBell />
          </div>
          <div className="absolute mt-[-50px] ml-8 w-5 h-5 bg-red-500 flex justify-center items-center p-1 rounded-full text-[12px]">
            8
          </div>
        </div>
        <div>
          <button className="w-[169px] h-[49px] bg-[#571998] rounded-full">
            Wallet Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
