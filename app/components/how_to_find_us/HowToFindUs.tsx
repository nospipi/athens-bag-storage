import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import Map from "./Map.client";
import Link from "next/link";
import Image from "next/image";
import illustrationSVG from "@/public/illustration4.svg";
import _ from "lodash";

//----------------------------------------------------------

const HowToFindUs = async ({ locale }: { locale: SupportedLocaleTypes }) => {
  setRequestLocale(locale);
  const translations = await getTranslations();

  return (
    <div
      id={_.kebabCase(translations("how_to_find_us"))}
      className="w-full h-[100dvh] bg-gradient-to-b from-blue-300 to-pink-300 flex flex-col"
    >
      <div className="mock-header w-full min-h-[140px] sm:min-h-[160px]" />

      <div className="text-left bg-black bg-opacity-30 w-full p-4 flex flex-col gap-4 border-b-2 border-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {translations("how_to_find_us")}
        </h1>
        <p className="text-md text-yellow-200">
          {translations("how_to_find_us_explainer")}
        </p>
      </div>
      <div className="flex flex-col gap-4 p-4 flex-1 w-full h-full">
        <Link
          href={`https://www.google.com/maps/place/37.985727121782325,23.71909543003348`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 self-start"
        >
          {translations("navigate")}
        </Link>
        <div className="flex flex-row flex-1">
          <div className="flex items-center justify-center flex-1 hidden md:flex">
            <Image src={illustrationSVG} alt="Illustration" width={350} />
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default HowToFindUs;

// Google Maps Implementation
// <div className="flex-1">
//   <iframe
//     title="Google Map"
//     src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3144.6315497783326!2d23.7190954!3d37.9857271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDU5JzA4LjYiTiAyM8KwNDMnMDguNyJF!5e0!3m2!1sen!2sgr!4v1736874054152!5m2!1sen!2sgr"
//     allowFullScreen
//     loading="lazy"
//     className="rounded-2xl w-full h-full"
//   />
// </div>;
