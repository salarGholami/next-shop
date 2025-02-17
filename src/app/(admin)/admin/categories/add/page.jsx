"use client";

import TextField from "@/common/TextField";
import { useAddCategory } from "@/hooks/useCategories";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";

const categoryTypes = [
  {
    id: 1,
    label: "محصول",
    value: "product",
  },
  {
    id: 2,
    label: "پست",
    value: "post",
  },
  {
    id: 3,
    label: "تیکت",
    value: "ticket",
  },
  {
    id: 4,
    label: "نظرات",
    value: "comment",
  },
];

function page() {
  const [category, setCategory] = useState({
    title: "",
    description: "",
    englishTitle: "",
  });
  const router = useRouter();
  const [selectedType, setSelectedType] = useState("");
  const { isLoading, mutateAsync } = useAddCategory();
  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...category,
        type: selectedType.value,
      });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">افزودن دسته بندی جدید</h1>
      <div className="max-w-sm mb-10">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="عنوان"
            value={category.title}
            onChange={handleChange}
          />
          <TextField
            name="englishTitle"
            label="عنوان انگلیسی"
            value={category.englishTitle}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="توضیحات"
            value={category.description}
            onChange={handleChange}
          />

          <div className="py-3 px-4">
            <label htmlFor="category" className="mb-2">
              دسته بندی
            </label>
            <Select
              className="text-sm"
              id="type"
              placeholder="انتخاب ..."
              onChange={setSelectedType}
              options={categoryTypes}
              defaultValue={selectedType}
            />
          </div>
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
}

export default page;
