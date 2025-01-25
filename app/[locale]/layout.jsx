import { Roboto, Poppins, Cairo } from "next/font/google";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import SideBar from "../componentes/SideBar";
import DarkModeProvider from "@/lib/DarkModeContext";
import MobileNavBar from "@/app/componentes/MobileNavBar";
import { arMetadata, enMetadata } from "@/lib/LinksData";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--roboto",
});
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--poppins",
});
// ------- Metadata Configuration ---------
export function generateMetadata({ params }) {
  const locale = params.locale;
  // Return metadata based on locale
  return locale === "ar" ? arMetadata : enMetadata;
}


export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <DarkModeProvider>
        <body
          className={`${
            locale == "ar" ? cairo.className : poppins.variable
          } grid grid-cols-4  mx-auto  h-screen gap-2 max-md:flex max-md:flex-col max-md:overflow-hidden`}
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {/* <Header /> */}
            <SideBar />
            <div className=" col-span-3 h-screen overflow-y-auto px-2 shadow-xl max-md:pb-32 ">
              {children}
            </div>
            <MobileNavBar />
            {/* <Footer /> */}
          </NextIntlClientProvider>
        </body>
      </DarkModeProvider>
    </html>
  );
}
