"use client";

import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";

import PaymentTable from "./PaymentTable";

function Payments() {
  const { data, isLoading } = useGetUser();
  const { payments } = data || {};

  if (isLoading) return <Loading />;
  return (
    <div>
      <h1 className="font-bold">سفارشات کاربر</h1>
      <PaymentTable payments={payments} />
    </div>
  );
}
export default Payments;
