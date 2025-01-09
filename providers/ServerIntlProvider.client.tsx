"use client";
import { IntlProvider } from "react-intl";
import { ReactNode } from "react";

//-------------------------------------------------------------------------

interface ServerIntlProviderProps {
  messages: Record<string, string>;
  locale: string;
  children: ReactNode;
}

export default function ServerIntlProvider({
  messages,
  locale,
  children,
}: ServerIntlProviderProps) {
  return (
    <IntlProvider messages={messages} locale={locale} textComponent="span">
      {children}
    </IntlProvider>
  );
}
