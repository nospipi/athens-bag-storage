import NavigateButton from "./NavigateButton";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import Map from "./Map.client";
import _ from "lodash";

//----------------------------------------------------------

const HowToFindUs = async ({ locale }: { locale: SupportedLocaleTypes }) => {
  setRequestLocale(locale);
  const translations = await getTranslations();

  return (
    <div
      id={_.kebabCase(translations("how_to_find_us"))}
      className="h-[100dvh] bg-gradient-to-b from-blue-300 to-pink-300 flex flex-col gap-3 p-4"
    >
      <div
        className="mock-header"
        style={{
          minHeight: "130px",
        }}
      />
      {/* SEO-optimized and visually appealing explanations */}
      <div className="text-left flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          {translations("how_to_find_us")}
        </h1>
        <p className="text-md">{translations("how_to_find_us_explainer")}</p>
      </div>
      <a
        href={`https://www.google.com/maps/place/37.985727121782325,23.71909543003348`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 self-start text-white"
      >
        {translations("navigate")}
      </a>
      <Map />
    </div>
  );
};

export default HowToFindUs;
