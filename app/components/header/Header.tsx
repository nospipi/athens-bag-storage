import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import Image from "next/image";
import logo from "@/public/logo.png";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import _ from "lodash";

//----------------------------------------------------------------------

const Header = async ({ locale }: { locale: SupportedLocaleTypes }) => {
  setRequestLocale(locale);
  const translations = await getTranslations();

  return (
    <div className="fixed w-full top-0 max-h-[110px] flex justify-center items-center backdrop-blur">
      <div className="flex justify-center items-center gap-3 px-[10px] bg-blur">
        <Link
          href={`#${_.kebabCase(translations("how_to_find_us")).toLowerCase()}`}
          className="hidden sm:block text-[13px] hover:underline cursor-pointer"
        >
          {translations("how_to_find_us")}
        </Link>
        <Link
          href={`#${_.kebabCase(translations("contact_us")).toLowerCase()}`}
          className="hidden sm:block text-[13px] hover:underline cursor-pointer"
        >
          {translations("contact_us")}
        </Link>
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={135}
            className="cursor-pointer mt-[60]"
          />
        </Link>
        <Link
          href={`#${_.kebabCase(
            translations("terms_of_service")
          ).toLowerCase()}`}
          className="hidden sm:block text-[13px] hover:underline cursor-pointer"
        >
          {translations("terms_of_service")}
        </Link>
        <Link
          href={`#${_.kebabCase(translations("questions")).toLowerCase()}`}
          className="hidden sm:block text-[13px] hover:underline cursor-pointer"
        >
          {translations("questions")}
        </Link>
        <button className="block sm:hidden fixed top-10 right-4 bg-transparent p-0 m-0">
          <BiMenu size={30} />
        </button>
      </div>
    </div>
  );
};

export default Header;
