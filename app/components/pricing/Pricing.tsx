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
  TableFooter,
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
      <div className="mock-header w-full min-h-[140px] sm:min-h-[160px]" />

      <div className="text-left bg-black bg-opacity-30 w-full p-4 flex flex-col gap-4 border-b-2 border-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {translations("pricing")}
        </h1>
        <p className="text-md text-yellow-200">
          {translations("pricing_explainer")}
        </p>
      </div>
      <div className="flex flex-row flex-1 p-4">
        <Table className="flex-1">
          <TableCaption>{translations("currency_is_euro")}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead rowSpan={2} className="text-white">
                {translations("storage_time")}
              </TableHead>
              <TableHead colSpan={3} className="text-center text-white">
                {translations("sizes")}
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="text-white">
                {translations("small")}*
              </TableHead>
              <TableHead className="text-white">
                {translations("medium")}*
              </TableHead>
              <TableHead className="text-white">
                {translations("large")}*
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>6 {translations("hours")}</TableCell>
              <TableCell>€7</TableCell>
              <TableCell>€9</TableCell>
              <TableCell>€11</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12 {translations("hours")}</TableCell>
              <TableCell>€9</TableCell>
              <TableCell>€11</TableCell>
              <TableCell>€13</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>24 {translations("hours")}</TableCell>
              <TableCell>€11</TableCell>
              <TableCell>€14</TableCell>
              <TableCell>€17</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2 {translations("days")}</TableCell>
              <TableCell>€14</TableCell>
              <TableCell>€18</TableCell>
              <TableCell>€22</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3 {translations("days")}</TableCell>
              <TableCell>€17</TableCell>
              <TableCell>€22</TableCell>
              <TableCell>€27</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4 {translations("days")}</TableCell>
              <TableCell>€20</TableCell>
              <TableCell>€26</TableCell>
              <TableCell>€32</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5 {translations("days")}</TableCell>
              <TableCell>€23</TableCell>
              <TableCell>€30</TableCell>
              <TableCell>€37</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6 {translations("days")}</TableCell>
              <TableCell>€26</TableCell>
              <TableCell>€34</TableCell>
              <TableCell>€42</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7 {translations("days")}</TableCell>
              <TableCell>€29</TableCell>
              <TableCell>€38</TableCell>
              <TableCell>€47</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8 {translations("days")}</TableCell>
              <TableCell>€32</TableCell>
              <TableCell>€42</TableCell>
              <TableCell>€52</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9 {translations("days")}</TableCell>
              <TableCell>€35</TableCell>
              <TableCell>€46</TableCell>
              <TableCell>€57</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10 {translations("days")}</TableCell>
              <TableCell>€38</TableCell>
              <TableCell>€50</TableCell>
              <TableCell>€62</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter className="bg-transparent">
            <TableRow>
              <TableCell colSpan={4} className="text-center text-white">
                {translations("dimensions_in_cm")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-white">
                {translations("small")}
              </TableCell>
              <TableCell colSpan={3}>
                {translations("up_to")} 50cm x 30cm x 20cm
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-white">
                {translations("medium")}
              </TableCell>
              <TableCell colSpan={3}>
                {translations("up_to")} 65cm x 50cm x 25cm
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-white">
                {translations("large")}
              </TableCell>
              <TableCell colSpan={3}>
                {translations("up_to")} 90cm x 40cm x 40cm
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4} className="text-center text-white">
                {translations("dimensions_in_inches")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-white">
                {translations("small")}
              </TableCell>
              <TableCell colSpan={3}>
                {translations("up_to")} 20 in. x 12 in. x 8 in.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-white">
                {translations("medium")}
              </TableCell>
              <TableCell colSpan={3}>
                {translations("up_to")} 26 in. x 20 in. x 10 in.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-white">
                {translations("large")}
              </TableCell>
              <TableCell colSpan={3}>
                {translations("up_to")} 36 in. x 16 in. x 16 in.
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>

        <div className="flex items-center justify-center w-[100%] hidden md:flex">
          <Image src={illustrationSVG} alt="Illustration" width={300} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
