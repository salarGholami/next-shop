"use client";

import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";
import CouponListTable from "./CouponListTable";
import { useGetCoupons } from "@/hooks/useCoupons";
import Loading from "@/common/Loading";

function page() {
  const { isLoading, data } = useGetCoupons();
  const { coupons } = data || {};
  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">کد های تخفیف</h1>
        <Link
          href="/admin/coupons/add"
          className="text-primary-900 hover:text-white hover:bg-primary-900 flex items-center gap-x-2 border-primary-900 border p-2 rounded-xl"
        >
          <HiPlusCircle className="w-5 h-5" /> <span>اضافه کردن کد تحفیف</span>
        </Link>
      </div>
      <CouponListTable coupons={coupons} />
    </div>
  );
}

export default page;
