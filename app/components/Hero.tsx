"use client";
import React from "react";
import img from "../shutterstock_2332304083.jpg";

//----------------------------------------------------

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat blurred-on-menu-open"
      style={{ backgroundImage: `url(${img.src})` }}
    ></div>
  );
};

export default Hero;
