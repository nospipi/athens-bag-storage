import _ from "lodash";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import { BsTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import illustrationSVG from "@/public/illustration2.svg";
import Form from "./Form";

//-------------------------------------------------------------------------

const ContactUs = async ({ locale }: { locale: SupportedLocaleTypes }) => {
  setRequestLocale(locale);
  const translations = await getTranslations();

  return (
    <section
      id={_.kebabCase(translations("contact_us"))}
      className="w-full h-[100dvh] bg-gradient-to-b from-blue-300 to-white/0 flex flex-col"
    >
      <div
        className="mock-header"
        style={{
          minHeight: "160px",
        }}
      />
      <div className="text-left bg-black bg-opacity-30 w-full p-4 flex flex-col gap-4 border-b-2 border-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {translations("contact_us")}
        </h1>
        <p className="text-md text-yellow-200">
          We would love to hear from you. Get in touch with us today!
        </p>
      </div>
      <div className="flex flex-col flex-1 p-4 gap-4">
        <div className="flex flex-row flex-wrap gap-4">
          <a
            href={`tel:+306947845332`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-gray-900 font-semibold py-3 px-5 rounded-full shadow-lg transition transform hover:scale-105 self-start text-white flex flex-row gap-4 items-center"
          >
            <BsTelephoneFill size={20} />
            <span>+30 6941788654</span>
          </a>
          <a
            href={`tel:+306947845332`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-gray-900 font-semibold py-3 px-5 rounded-full shadow-lg transition transform hover:scale-105 self-start text-white flex flex-row gap-4 items-center"
          >
            <BsTelephoneFill size={20} />
            <span>+30 6947845332</span>
          </a>
          <a
            href={`mailto:info@athensbagstorage.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-gray-900 font-semibold py-3 px-5 rounded-full shadow-lg transition transform hover:scale-105 self-start text-white flex flex-row gap-4 items-center"
          >
            <MdAlternateEmail size={22} />
            <span>info@athensbagstorage.com</span>
          </a>
        </div>
        <div className="flex flex-row flex-1">
          <div className="flex items-center justify-center w-[100%] hidden md:flex">
            <Image src={illustrationSVG} alt="Illustration" width={200} />
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
