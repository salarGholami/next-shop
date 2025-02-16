"use client";

import TextField from "@/common/TextField";
import { useState } from "react";

const productsFormData = [
  {
    id: 1,
    label: "عنوان",
    name: "title",
  },
  {
    id: 2,
    label: "توضیحات",
    name: "description",
  },
  {
    id: 3,
    label: "اسلاگ",
    name: "slug",
  },
  {
    id: 4,
    label: "برند",
    name: "brand",
  },
  {
    id: 5,
    label: "قیمت",
    name: "price",
  },
  {
    id: 6,
    label: "تخفیف",
    name: "discount",
  },
  {
    id: 7,
    label: "قیمت روی تخفیف",
    name: "offPrice",
  },
  {
    id: 8,
    label: "موجودی",
    name: "countInStock",
  },
  {
    id: 9,
    label: "لینک عکس محصول",
    name: "imageLink",
  },
];

function addProductPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    brand: "",
    price: "",
    offPrice: "",
    discount: "",
    countInStock: "",
    imageLink: "",
  });

  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-sm">
      <h1 className="mb-4 font-bold text-xl">اضافه کردن محصول</h1>
      <form className="">
        {productsFormData.map((item) => {
            console.log(item);
            
          return (
            <TextField
              key={item.id}
              label={item.label}
              name={item.name}
              value={formData[item.name]}
              onChange={handChange}
            />
          );
        })}
      </form>
    </div>
  );
}
export default addProductPage;
