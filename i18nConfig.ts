import { SupportedLocales } from "@/locales";

interface I18nConfig {
  locales: SupportedLocales[];
  defaultLocale: SupportedLocales;
  prefixDefault: boolean;
}

const i18nConfig: I18nConfig = {
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
  prefixDefault: true,
};

export default i18nConfig;
