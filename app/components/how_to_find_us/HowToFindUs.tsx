import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import Map from "./Map.client";
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
      <div
        className="mock-header"
        style={{
          minHeight: "160px",
        }}
      />

      <div className="text-left bg-black bg-opacity-30 w-full p-4 flex flex-col gap-4 border-b-2 border-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {translations("how_to_find_us")}
        </h1>
        <p className="text-md text-yellow-200">
          {translations("how_to_find_us_explainer")}
        </p>
      </div>
      <div className="flex flex-col gap-4 p-4 flex-1 w-full h-full">
        <a
          href={`https://www.google.com/maps/place/37.985727121782325,23.71909543003348`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 self-start"
        >
          {translations("navigate")}
        </a>
        <div className="flex flex-row flex-1">
          <div className="flex items-center justify-center flex-1 hidden md:flex">
            <Image src={illustrationSVG} alt="Illustration" width={250} />
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default HowToFindUs;
