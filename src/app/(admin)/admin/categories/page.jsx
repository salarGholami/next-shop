"use client";

import Loading from "@/common/Loading";
import { useGetCategories } from "@/hooks/useCategories";
// import ProductListTable from "./ProductListTable";
import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";
import CategoryListTable from "./CategoryistTable";

function page() {
  const { data, isLoading } = useGetCategories();
  const { categories } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">دسته بندی</h1>
        <Link
          href="/admin/categories/add"
          className="text-primary-900 hover:text-white hover:bg-primary-900 flex items-center gap-x-2 border-primary-900 border p-2 rounded-xl"
        >
          <HiPlusCircle className="w-5 h-5" /> <span>اضافه کردن دسته بندی</span>
        </Link>
      </div>
      <CategoryListTable categories={categories} />
    </div>
  );
}

export default page;
