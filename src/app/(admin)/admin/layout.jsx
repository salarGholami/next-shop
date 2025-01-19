import "../../globals.css";
import { Toaster } from "react-hot-toast";
import vazirFont from "@/constants/localFonts";
import Providers from "@/pages/Providers";

export const metadata = {
  title: "پروفایل ادمین",
  description: "پروفایل ادمین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <div className="container xl:max-w-screen-xl px-2">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
