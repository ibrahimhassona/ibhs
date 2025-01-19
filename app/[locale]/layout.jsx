import { Roboto, Poppins, Cairo } from "next/font/google";
import "./globals.css";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import { Providers } from "./Chakra-Ui/provider";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import SideBar from "../componentes/SideBar";
import DarkModeProvider, { useDarkMode } from '@/lib/DarkModeContext'
import MobileNavBar from '@/app/componentes/MobileNavBar'
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
export const metadata = {
  title: "IBHS",
  description:
    "Ibrahim Hassouna , Front End Developer , Web Developer , Nextjs Developer " +
    [
      "مبرمج مصرى",
      "ابراهيم حسونه",
      "مبرمج ويب",
      " تفاصيل مواقع الكترونيه بسعر جيد ",
    ].join(" , "),
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png?v=4"],
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${locale == "ar" ? cairo.className : poppins.variable
          } grid grid-cols-4  mx-auto  h-screen gap-2 max-md:flex max-md:flex-col max-md:overflow-hidden`}
      >
        <Providers>
            <DarkModeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {/* <Header /> */}
              <SideBar />
              <div className=" col-span-3 h-screen overflow-y-auto px-2 shadow-xl max-md:pb-14 ">{children}</div>
              <MobileNavBar />
              {/* <Footer /> */}
          </NextIntlClientProvider>
            </DarkModeProvider>
        </Providers>
      </body>
    </html>
  );
}
