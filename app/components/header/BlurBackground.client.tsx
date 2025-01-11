"use client";

import { useEffect, useState } from "react";

const BlurBackground = () => {
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newBlur = Math.min((scrollY / 300) * 4, 4); // Max blur 4px at scrollY = 300
      setBlurAmount(newBlur);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[110px] z-[-1]"
      style={{
        backdropFilter: `blur(${blurAmount}px)`,
      }}
    ></div>
  );
};

export default BlurBackground;
