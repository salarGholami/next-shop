import vazirFont from "@/constants/localFonts";
import "./globals.css";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import Providers from "./Providers";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Toaster />
        <Header />
        <div className="container xl:max-w-screen-xl">
          <Providers>
            <div className="px-2">{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
