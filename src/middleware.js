import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/profile")) {
    let strCookie = "";

    req.cookies.getAll().forEach((item) => {
      strCookie += `${item?.name}=${item?.value}; `;
    });

    const { data } = fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
      methodL: "GET",
      credentials: "include",
      headers: {
        cookie: strCookie,
      },
    }).then((res) => res.json());

    const { user } = data || {};

    if (!user) return NextResponse.redirect(new URL("/auth", url));
  }

  if (pathname.startsWith("/admin")) {
    console.log("this is admin req");
  }
}

export const config = {
  matcher: ["/admin", "/profile"],
};
