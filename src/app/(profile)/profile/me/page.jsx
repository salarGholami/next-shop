"use client";

import Loading from "@/common/Loaing";
import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { updateProfile } from "@/services/authServices";
import { includeObj } from "@/utils/objectUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function MePage() {
  const { data, isLoading } = useGetUser();
  const { isLoading: isUpdating, mutateAsync } = useMutation({
    mutationFn: updateProfile,
  });
  const [formData, setFormData] = useState({});
  const { user } = data || {};
  const includeskey = ["name", "email", "phoneNumber", "biography"];

  useEffect(() => {
    if (user) setFormData(includeObj(user, includeskey));
  }, [user]);

  const queryClient = useQueryClient();

  if (isLoading) return <Loading />;

  const labels = {
    name: "نام کاربری",
    email: "ایمیل",
    phoneNumber: "شماره تلفن",
    biography: "بیوگرافی",
  };

  if (isLoading) return <Loading />;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="max-w-sm">
      <h1 className="text-xl font-bold mb-4">اطلاعات کاربری</h1>
      <form onSubmit={submitHandler} className="">
        <div className="flex flex-col-reverse">
          {Object.keys(includeObj(user, includeskey)).map((key) => {
            return (
              <TextField
                label={labels[key]}
                name={key}
                key={key}
                value={formData[key] || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            );
          })}
        </div>
        <div>
          {isUpdating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default MePage;
