"use client";

import Loading from "@/common/Loading";
import { useGetProducts } from "@/hooks/useProducts";
import ProductListTable from "./ProductListTable";
import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";

function page() {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">محصولات</h1>
      </div>
      <ProductListTable products={products} />
    </div>
  );
}
export default page;

