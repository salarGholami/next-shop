"use client";

import RadioInput from "@/common/RadioInput";
import TextField from "@/common/TextField";
import { useGetProducts } from "@/hooks/useProducts";
import { useState } from "react";
import Select from "react-select";

export default function page() {
  const { data } = useGetProducts();
  const { products } = data || {};

  const [formData, setFormData] = useState({
    code: "",
    amount: 0,
    usageLimit: "",
  });
  const [type, setType] = useState("percent");
  const [productId, setProductId] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-10">
      <h1 className="mb-2 font-bold text-lg">اضافه کردن محصول</h1>
      <div className="max-w-sm">
        <form>
          <TextField
            label="کد"
            name="code"
            value={formData.code}
            onChange={handleChange}
          />
          <TextField
            label="مقدار"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
          <TextField
            label="ظرفیت کد تخفیف"
            name="usageLimit"
            value={formData.usageLimit}
            onChange={handleChange}
          />
          <div className="w-full py-3 px-4">
            <span className="mb-2">نوع کد تخفیف</span>
            <div className="m-2 flex items-center justify-between">
              <RadioInput
                checked={type === "percent"}
                id="percent-Type"
                name="type"
                label="درصد"
                value="percent"
                onChange={(e) => setType(e.target.value)}
              />
              <RadioInput
                checked={type === "fixedProduct"}
                id="fixedProduct-Type"
                name="type"
                label="قیمت ثابت"
                value="fixedProduct"
                onChange={(e) => setType(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full py-3 px-4">
            <div>
              <label htmlFor="products" className="mb-2 block">
                شامل محصولات
              </label>
            </div>
            <Select
              className="text-sm"
              placeholder="انتخاب محصول ..."
              instanceId="products"
              isMulti
              onChange={setProductId}
              options={products}
              getOptionLabel={(option) => option.title}
              getOptionValue={(option) => option._id}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
