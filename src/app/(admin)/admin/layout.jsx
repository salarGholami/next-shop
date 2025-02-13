import "../../globals.css";
import { Toaster } from "react-hot-toast";
import vazirFont from "@/constants/localFonts";
import Providers from "@/pages/Providers";
import AdminSidebar from "./AdminSidebar";

export const metadata = {
  title: "پروفایل ادمین",
  description: "پروفایل ادمین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressContentEditableWarning={true}
        className={`${vazirFont.variable} font-sans`}
      >
        <Providers>
          <Toaster />
          <div className="grid grid-cols-4 bg-white h-screen">
            <div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
              <AdminSidebar />
            </div>
            <div className="col-span-3 overflow-y-auto p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
