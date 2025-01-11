import illustration1Svg from "@/public/illustration1.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaSquarePhoneFlip } from "react-icons/fa6";

//----------------------------------------------------------

const Hero = () => {
  return (
    <section className="hero py-10 lg:py-28 w-full h-screen bg-gradient-to-b from-white to-blue-300 flex justify-center items-center h-sm:items-end relative">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="lg:w-1/2 flex flex-col items-start gap-8">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
              Convenient Luggage Storage in Downtown Athens
            </h1>
            <p className="text-sm md:text-xl text-left">
              Explore Athens without the hassle of carrying your luggage. Safe,
              secure, and easy storage for all your travel needs.
            </p>
            <a
              href="#book-now"
              className="bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
            >
              Find us on the map
            </a>
          </div>
          <Image
            src={illustration1Svg}
            alt="Illustration"
            className="w-[180px] md:w-[300px]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-5 text-sm flex flex-col gap-2 h-sm:hidden">
        <Link
          href="https://www.google.com/maps/dir/?api=1&destination=37.9866,23.7346"
          className="flex flex-row gap-2 justify-start items-center hover:underline"
        >
          <FaLocationDot size={16} />
          <span>12 Lenorman, 10436, Athens, Greece</span>
        </Link>
        <Link
          href="tel:+302101234567"
          className="flex flex-row gap-2 justify-start items-center hover:underline"
        >
          <FaSquarePhoneFlip size={15} />
          <span>+30 210 1234567</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
