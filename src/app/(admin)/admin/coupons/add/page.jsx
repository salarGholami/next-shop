"use client";

import RadioInput from "@/common/RadioInput";
import TextField from "@/common/TextField";
import { useGetProducts } from "@/hooks/useProducts";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Select from "react-select";
import { useAddNewCoupons } from "@/hooks/useCoupons";
import toast from "react-hot-toast";
import Loading from "@/common/Loading";
import { useRouter } from "next/navigation";

export default function page() {
  const { data } = useGetProducts();
  const { products } = data || {};

  const [formData, setFormData] = useState({
    code: "",
    amount: 0,
    usageLimit: "",
  });
  const [type, setType] = useState("percent");
  const [productIds, setProductIds] = useState([]);

  const [expireDate, setExpireDate] = useState(new Date());
  const { mutateAsync, isLoading } = useAddNewCoupons();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        type,
        expireDate: new Date(expireDate).toISOString(),
        productIds: productIds.map((p) => p._id),
      });
      toast.success(message);
      router.push("/admin/coupons");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mb-10">
      <h1 className="mb-2 font-bold text-lg">اضافه کردن محصول</h1>
      <div className="max-w-sm">
        <form onSubmit={handleSubmit}>
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
              onChange={setProductIds}
              options={products}
              getOptionLabel={(option) => option.title}
              getOptionValue={(option) => option._id}
            />
          </div>
          <div className="w-full py-3 px-4">
            <span className="mb-2 block">تاریخ انقضا</span>
            <DatePicker
              inputClass="textField__input w-[22rem] py-3 px-4"
              value={expireDate}
              format="YYYY/MM/DD"
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-left"
              onChange={(date) => setExpireDate(date)}
            />
          </div>
          <div className="w-full py-3 px-4">
            {isLoading ? (
              <Loading />
            ) : (
              <button className="btn btn--primary w-full">تایید</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
