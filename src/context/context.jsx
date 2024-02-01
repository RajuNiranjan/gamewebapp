"use client";
import React, { createContext, useState } from "react";
import game1 from "../asserts/gm1.png";
import game2 from "../asserts/gm2.png";
import game3 from "../asserts/gm3.png";
import game4 from "../asserts/gm4.png";
import game5 from "../asserts/gm5.png";
import game6 from "../asserts/gm6.png";
import game7 from "../asserts/gm7.png";
import game8 from "../asserts/gm8.png";
import game9 from "../asserts/gm9.png";
import game10 from "../asserts/gm10.png";

export const GlobalContext = createContext();

const singlePost = [
  {
    id: 1,
    poster: game1,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
  {
    id: 2,
    poster: game2,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
  {
    id: 3,
    poster: game3,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
  {
    id: 3,
    poster: game3,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
  {
    id: 4,
    poster: game4,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
  {
    id: 5,
    poster: game5,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
  {
    id: 6,
    poster: game6,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
  {
    id: 7,
    poster: game7,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
  {
    id: 8,
    poster: game8,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
  {
    id: 9,
    poster: game9,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
  {
    id: 10,
    poster: game10,
    rating: 4.5,
    title: "Delysium",
    info: "Shooter, Bottle Royale",
  },
];

export const GlobalContextProvider = ({ children }) => {
  const [singleMovieData, setSingleMovieData] = useState();

  return (
    <GlobalContext.Provider
      value={{
        singlePost,
        singleMovieData,
        setSingleMovieData,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
