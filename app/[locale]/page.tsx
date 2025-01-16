import { SupportedLocaleTypes } from "@/locales";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import HowToFindUs from "../components/how_to_find_us/HowToFindUs";
import Pricing from "../components/pricing/Pricing";
import Questions from "../components/questions/Questions";
import ContactUs from "../components/contact_us/ContactUs";
import Footer from "../components/footer/Footer";
import _ from "lodash";

//----------------------------------------------------------------------

type Props = {
  params: Promise<{ locale: SupportedLocaleTypes }>;
};

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="w-full h-[100dvh]">
      <Header locale={locale} />
      <Hero locale={locale} />
      <HowToFindUs locale={locale} />
      <Pricing locale={locale} />
      <Questions locale={locale} />
      <ContactUs locale={locale} />

    </div>
  );
}
