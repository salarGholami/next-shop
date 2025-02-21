"use client";

import Loading from "@/common/Loading";
import { useGetOneCoupon } from "@/hooks/useCoupons";

function page() {
  const { isLoading, data } = useGetOneCoupon();
  const { coupon } = data || {};

  if (isLoading) return <Loading />;
  
  return <div>page</div>;
}

export default page;
