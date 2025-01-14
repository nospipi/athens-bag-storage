import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.client";
import { SupportedLocaleTypes } from "@/locales";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import illustrationSVG from "@/public/illustration5.svg";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import _ from "lodash";

//-------------------------------------------------------------------------

const Pricing = async ({ locale }: { locale: SupportedLocaleTypes }) => {
  setRequestLocale(locale);
  const translations = await getTranslations();

  return (
    <section
      id={_.kebabCase(translations("pricing"))}
      className="hero w-full min-h-[100dvh] bg-gradient-to-b from-pink-300 to-blue-300 flex flex-col"
    >
      <div
        className="mock-header"
        style={{
          minHeight: "160px",
        }}
      />

      <div className="text-left bg-black bg-opacity-30 w-full p-4 flex flex-col gap-4 border-b-2 border-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {translations("pricing")}
        </h1>
        <p className="text-md text-yellow-200">
          {translations("find_answers_to_common_questions")}
        </p>
      </div>
      <div className="flex flex-row flex-1 p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Up To</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">6 hrs</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex items-center justify-center w-[100%] hidden md:flex">
          <Image src={illustrationSVG} alt="Illustration" width={300} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
