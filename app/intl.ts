"server-only";

import { createIntl, IntlShape } from "@formatjs/intl";
import { SupportedLocales } from "@/locales";

export default async function getIntl(
  locale: SupportedLocales
): Promise<IntlShape> {
  return createIntl({
    locale: locale,
    messages: (await import(`@/dictionary/${locale}.json`)).default,
  });
}
