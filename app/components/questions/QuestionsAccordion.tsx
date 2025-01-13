import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.client";
import { SupportedLocaleTypes } from "@/locales";
import { getTranslations, setRequestLocale } from "next-intl/server";
import _ from "lodash";

//-------------------------------------------------------------------------

const QuestionsAccordion = async ({
  locale,
}: {
  locale: SupportedLocaleTypes;
}) => {
  setRequestLocale(locale);
  const translations = await getTranslations();
  //faq_where_should_leave_luggage_question
  //faq_where_should_leave_luggage_answer
  //faq_what_is_the_cost_question
  //faq_what_is_the_cost_answer
  return (
    <section
      id={_.kebabCase(translations("questions"))}
      className="hero w-full h-[100dvh] bg-gradient-to-b from-pink-300 to-blue-300 flex flex-col gap-3 p-4 items-start"
    >
      <div className="mock-header" />
      {/* Header Section */}
      <div className="text-left mt-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          {translations("frequently_asked_questions")}
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          {translations("find_answers_to_common_questions")}
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
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
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default QuestionsAccordion;
