"use client";
import React from "react";
//import img from "../shutterstock_2332304083.jpg";
import { useTheme } from "next-themes";
import { LuSun } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import DrawerDemo from "./Drawer";
//----------------------------------------------------

const Hero = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
    //style={{ backgroundImage: `url(${img.src})` }}
    >
      <div>
        <button
          //className="p-2 rounded-full bg-white text-black"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <LuSun color="white" size={23} />
          ) : (
            <IoMdMoon color="black" size={23} />
          )}
        </button>
        <DrawerDemo />
      </div>
    </div>
  );
};

export default Hero;
