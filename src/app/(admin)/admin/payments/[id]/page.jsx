"use client";

import Loading from "@/common/Loading";
import { useGetPaymentById } from "@/hooks/usePayments";
import { useParams } from "next/navigation";

function page() {
  const { id } = useParams();
  const { isLoading, data } = useGetPaymentById(id);
  const { payment } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      {payment.map((item) => {
        return (
          <div key={item._id}>
            <p>{item.user._id}</p>
            <p>{item.user.name}</p>
            <p>{item.user.email}</p>
            <p>{item.user.phoneNumber}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default page;
