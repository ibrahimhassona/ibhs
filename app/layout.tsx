import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { Providers } from "./Chakra-Ui/provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--roboto",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--poppins",
});
export const metadata: Metadata = {
  title: "IBHS",
  description:
    "Ibrahim Hassouna , Front End Developer , Web Developer , Nextjs Developer " + ['مبرمج مصرى','ابراهيم حسونه','مبرمج ويب',' تفاصيل مواقع الكترونيه بسعر جيد '].join(" , "),
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png?v=4']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
