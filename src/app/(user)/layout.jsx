import vazirFont from "@/constants/localFonts";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "../Providers";
import Header from "../Header";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <Header />
          <div className="container xl:max-w-screen-xl">
            <div className="px-2">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
