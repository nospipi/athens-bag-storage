import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SupportedLocaleTypes } from "@/locales";
import _ from "lodash";
import x_com from "@/public/x_com.png";

//--------------------------------------------------------------------------------------------------------------

// <Image
//   src={bag}
//   alt="Athens Bag Storage Logo"
//   width={50}
//   height={50}
// />;

const Footer = async ({ locale }: { locale: SupportedLocaleTypes }) => {
  setRequestLocale(locale);
  const translations = await getTranslations();

  return (
    <footer className="py-12 text-sm">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col border-l-[3px] border-l-[dodgerblue] pl-4">
          <h2 className="text-[20px] font-bold mb-4">Athens Bag Storage</h2>
          <p className="mb-4">{translations("footer_description")}</p>
          <p className="font-semibold">{translations("contact_us")}:</p>
          <Link
            href={`mailto:info@athensbagstorage.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 hover:text-gray-400 transition"
          >
            {translations("email")}: info@athensbagstorage.com
          </Link>
          <Link
            href={`tel:+306947845332`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            {translations("phone")}: +30 6947845332
          </Link>
        </div>

        <div className="flex flex-col border-l-[3px] border-l-[dodgerblue] pl-4">
          <h2 className="text-[20px] font-bold mb-4">
            {translations("footer_quick_links")}
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href={`#${_.kebabCase(
                  translations("how_to_find_us")
                ).toLowerCase()}`}
                className="hover:text-gray-400 transition"
              >
                {translations("how_to_find_us")}
              </Link>
            </li>
            <li>
              <Link
                href={`#${_.kebabCase(translations("pricing")).toLowerCase()}`}
                className="hover:text-gray-400 transition"
              >
                {translations("pricing")}
              </Link>
            </li>
            <li>
              <Link
                href={`#${_.kebabCase(
                  translations("questions")
                ).toLowerCase()}`}
                className="hover:text-gray-400 transition"
              >
                {translations("questions")}
              </Link>
            </li>
            <li>
              <Link
                href={`#${_.kebabCase(
                  translations("contact_us")
                ).toLowerCase()}`}
                className="hover:text-gray-400 transition"
              >
                {translations("contact_us")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col border-l-[3px] border-l-[dodgerblue] pl-4">
          <h2 className="text-[20px] font-bold mb-4">
            {translations("footer_connect_with_us")}
          </h2>
          <div className="flex space-x-6 mb-4">
            <Link
              href="https://facebook.com"
              className="hover:text-gray-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M22.675 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.789 4.661-4.789 1.325 0 2.464.099 2.795.142v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.126C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="https://x.com"
              className="hover:opacity-50 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={x_com} alt="X.com Logo" width={23} height={23} />
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-gray-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.545C0 23.226.793 24 1.77 24h20.458C23.207 24 24 23.226 24 22.273V1.727C24 .774 23.207 0 22.23 0zM7.06 20.452H3.564V9.005H7.06v11.447zM5.312 7.69c-1.121 0-2.03-.914-2.03-2.035a2.033 2.033 0 0 1 4.066 0c0 1.121-.91 2.035-2.03 2.035zm15.14 12.762h-3.495V14.81c0-1.35-.027-3.087-1.88-3.087-1.882 0-2.171 1.469-2.171 2.988v5.74h-3.496V9.005h3.357v1.566h.047c.467-.88 1.607-1.805 3.307-1.805 3.536 0 4.187 2.328 4.187 5.357v6.33z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} athensbagstorage.com -{" "}
            {translations("footer_all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
