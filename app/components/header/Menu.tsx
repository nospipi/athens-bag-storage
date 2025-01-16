"use client";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { MdMyLocation } from "react-icons/md";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { Squash as Hamburger, Squash } from "hamburger-react";

//-------------------------------------------------------------------------

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  //active:scale-110
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
    >
      <motion.div
        onClick={handleToggle}
        className={`md:hidden fixed top-8 right-5 bg-transparent transition-transform transform cursor-pointer flex flex-col items-end rounded-[20px] select-none`}
        initial={{
          backgroundColor: "transparent",
          boxShadow: "none",
          backdropFilter: "none",
        }}
        animate={{
          backgroundColor: isOpen ? "rgba(255,255,255,0.4)" : "transparent",
          boxShadow: isOpen ? "0 3px 10px 0 rgba(0,0,0,0.3)" : "none",
          backdropFilter: isOpen ? "blur(6px)" : "none",
        }}
        exit={{
          backgroundColor: "transparent",
          boxShadow: "none",
          backdropFilter: "none",
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <Squash
          toggled={isOpen}
          color="#163d44"
          rounded={true}
          size={20}
          duration={0.25}
          easing="ease-in"
          hideOutline
          label="Show menu"
        />

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            height: { duration: 0.15 },
            opacity: { duration: 0.2 },
          }}
          className="overflow-hidden w-full flex flex-col px-2 pb-2 -mt-[6px]"
        >
          <a
            href="/#how-to-find-us"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-full bg-transparent hover:bg-white disabled:opacity-50"
          >
            <span>How to find us</span>
            <MdMyLocation size={14} />
          </a>
          <a
            href="/#how-to-find-us"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-full bg-transparent hover:bg-white disabled:opacity-50"
          >
            <span>Pricing</span>
            <RiMoneyEuroCircleLine size={14} />
          </a>
          <a
            href="/#how-to-find-us"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-full bg-transparent hover:bg-white disabled:opacity-50"
          >
            <span>FAQ</span>
            <FaRegQuestionCircle size={13} />
          </a>
          <a
            href="/#how-to-find-us"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-full bg-transparent hover:bg-white disabled:opacity-50"
          >
            <span>Contact us</span>
            <LuMessageCircle size={13} />
          </a>
        </motion.div>
      </motion.div>
    </OutsideClickHandler>
  );
};

export default Menu;
