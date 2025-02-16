"use client";

import Loading from "@/common/Loading";
import { useGetProductById } from "@/hooks/useProducts";
import { useParams } from "next/navigation";

function page() {
  const { id } = useParams();
  const { isLoading, data } = useGetProductById(id);
  const { product } = data || {};

  
  if (isLoading) return <Loading />;
  
  return <div>page</div>;
}

export default page;
