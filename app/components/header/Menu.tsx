"use client";

import { useState } from "react";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { MdMyLocation } from "react-icons/md";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { Squash } from "hamburger-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import _ from "lodash";

//-------------------------------------------------------------------------

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const translations = useTranslations();

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
        className={`md:hidden fixed top-8 right-3 bg-transparent transition-transform transform cursor-pointer flex flex-col items-end rounded-[20px] select-none`}
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
          <Link
            href={`#${_.kebabCase(
              translations("how_to_find_us")
            ).toLowerCase()}`}
            className="flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-full bg-transparent hover:bg-white disabled:opacity-50"
          >
            <span>{translations("how_to_find_us")}</span>
            <MdMyLocation size={16} />
          </Link>
          <Link
            href={`#${_.kebabCase(translations("pricing")).toLowerCase()}`}
            className="flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-full bg-transparent hover:bg-white disabled:opacity-50"
          >
            <span>{translations("pricing")}</span>
            <RiMoneyEuroCircleLine size={16} />
          </Link>
          <Link
            href={`#${_.kebabCase(translations("questions")).toLowerCase()}`}
            className="flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-full bg-transparent hover:bg-white disabled:opacity-50"
          >
            <span>{translations("questions")}</span>
            <FaRegQuestionCircle size={14} />
          </Link>
          <Link
            href={`#${_.kebabCase(translations("contact_us")).toLowerCase()}`}
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-full bg-transparent hover:bg-white disabled:opacity-50"
          >
            <span> {translations("contact_us")}</span>
            <LuMessageCircle size={14} />
          </Link>
        </motion.div>
      </motion.div>
    </OutsideClickHandler>
  );
};

export default Menu;
