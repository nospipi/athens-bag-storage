import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.client";
import { SupportedLocaleTypes } from "@/locales";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import illustrationSVG from "@/public/illustration3.svg";
import _ from "lodash";

//-------------------------------------------------------------------------

const Questions = async ({ locale }: { locale: SupportedLocaleTypes }) => {
  setRequestLocale(locale);
  const translations = await getTranslations();

  return (
    <section
      id={_.kebabCase(translations("questions"))}
      className="hero w-full min-h-[100dvh] bg-gradient-to-b from-blue-300 to-pink-300 flex flex-col"
    >
      <div className="mock-header w-full min-h-[140px] sm:min-h-[160px]" />

      <div className="text-left bg-black bg-opacity-30 w-full p-4 flex flex-col gap-4 border-b-2 border-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {translations("frequently_asked_questions")}
        </h1>
        <p className="text-md text-yellow-200">
          {translations("find_answers_to_common_questions")}
        </p>
      </div>
      <div className="flex flex-row flex-1">
        <div className="flex items-center justify-center w-[100%] hidden md:flex">
          <Image src={illustrationSVG} alt="Illustration" width={250} />
        </div>
        <Accordion type="single" collapsible className="w-full p-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {translations("faq_where_should_leave_luggage_question")}
            </AccordionTrigger>
            <AccordionContent>
              {translations("faq_where_should_leave_luggage_answer")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {" "}
              {translations("faq_what_is_the_cost_question")}
            </AccordionTrigger>
            <AccordionContent>
              {translations("faq_what_is_the_cost_answer")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {translations("faq_how_do_i_pay_question")}
            </AccordionTrigger>
            <AccordionContent>
              {translations("faq_how_do_i_pay_answer")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              {translations("faq_what_are_the_terms_of_service_question")}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-1">
              <ul>
                <li>• {translations("terms_of_service_1")}</li>
                <li>• {translations("terms_of_service_2")}</li>
                <li>• {translations("terms_of_service_3")}</li>
                <li>• {translations("terms_of_service_4")}</li>
                <li>• {translations("terms_of_service_5")}</li>
                <li>• {translations("terms_of_service_6")}</li>
                <li>• {translations("terms_of_service_7")}</li>
                <li>• {translations("terms_of_service_8")}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Questions;
