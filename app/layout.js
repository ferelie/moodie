import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Moodie",
  description: "Share what you feel with the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          `w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ` +
          opensans.className
        }
      >
        <Header fugaz={fugaz} />
        {children}
        <Footer fugaz={fugaz}/>
      </body>
    </html>
  );
}
