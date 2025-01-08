import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AppContextProvider from "@/providers/ContextProvider";
import "./globals.css";

//-------------------------------------------------------------------------

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
