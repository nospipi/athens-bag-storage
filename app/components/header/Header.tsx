import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import BlurBackground from "./BlurBackground.client";
import LanguageChanger from "../language_selector/LanguageChanger.client";
import Menu from "./Menu.client";
import _ from "lodash";

//----------------------------------------------------------------------

const Header = async ({ locale }: { locale: SupportedLocaleTypes }) => {
  setRequestLocale(locale);
  const translations = await getTranslations();

  return (
    <header className="fixed w-full top-0 max-h-[110px] flex justify-center items-center z-10">
      <LanguageChanger />
      <BlurBackground />
      <div className="flex justify-center items-center gap-3 px-[10px]">
        <Link
          href={`#${_.kebabCase(translations("how_to_find_us")).toLowerCase()}`}
          className="hidden md:block text-sm hover:underline cursor-pointer"
        >
          {translations("how_to_find_us")}
        </Link>

        <Link
          href={`#${_.kebabCase(translations("pricing")).toLowerCase()}`}
          className="hidden md:block text-sm hover:underline cursor-pointer"
        >
          {translations("pricing")}
        </Link>
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={135}
            className="cursor-pointer mt-[40px] sm:mt-[60px] drop-shadow-[0px_10px_13px_rgba(0,0,0,0.35)] w-[100px] sm:w-[135px]"
          />
        </Link>
        <Link
          href={`#${_.kebabCase(translations("questions")).toLowerCase()}`}
          className="hidden md:block text-sm hover:underline cursor-pointer"
        >
          {translations("questions")}
        </Link>
        <Link
          href={`#${_.kebabCase(translations("contact_us")).toLowerCase()}`}
          className="hidden md:block text-sm hover:underline cursor-pointer"
        >
          {translations("contact_us")}
        </Link>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
