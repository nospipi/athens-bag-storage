import illustration1Svg from "@/public/illustration1.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaSquarePhoneFlip } from "react-icons/fa6";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import _ from "lodash";

//----------------------------------------------------------

const Hero = async ({ locale }: { locale: SupportedLocaleTypes }) => {
  setRequestLocale(locale);
  const translations = await getTranslations();

  return (
    <section className="hero w-full h-[100dvh] bg-gradient-to-b from-white/0 to-blue-300 flex flex-col items-center">
      <div className="mock-header w-full min-h-[140px] sm:min-h-[160px]" />
      <div className="px-6 lg:px-12 flex flex-col justify-center flex-1 gap-6 pb-[20px]">
        <div className="flex flex-1 flex-col-reverse md:flex-row items-center justify-between">
          <div className="lg:w-1/2 flex flex-col items-start gap-6">
            <h1 className="text-[20px] sm:text-3xl lg:text-5xl font-bold">
              {translations("hero_heading")}
            </h1>
            <p className="text-sm md:text-xl text-left">
              {translations("hero_subheading")}
            </p>
            <a
              href={`#${_.kebabCase(
                translations("how_to_find_us")
              ).toLowerCase()}`}
              className="bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
            >
              {translations("hero_button")}
            </a>
          </div>
          <Image
            src={illustration1Svg}
            alt="Illustration"
            className="w-[250px] md:w-[300px] h-sm:w-[220px] h-full"
          />
        </div>
        <div className="text-sm flex flex-col gap-2">
          <Link
            href="https://www.google.com/maps/place/37.985727121782325,23.71909543003348"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 justify-start items-center hover:underline"
          >
            <FaLocationDot size={16} />
            <span>{translations("hero_address")}</span>
          </Link>
          <Link
            href="tel:+302101234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 justify-start items-center hover:underline"
          >
            <FaSquarePhoneFlip size={15} />
            <span>+30 210 1234567</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
