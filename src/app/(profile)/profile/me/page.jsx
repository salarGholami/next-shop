"use client";

import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { includeObj } from "@/utils/objectUtils";
import { useEffect, useState } from "react";

function MePage() {
  const { data, isLoading } = useGetUser();
  const [formData, setFormData] = useState({});
  const { user } = data || {};

  const includeskey = ["name", "email", "phoneNumber", "biography"];

  useEffect(() => {
    if (user) setFormData(includeObj(user, includeskey));
  }, [user]);

  if (isLoading) return <p>loading...</p>;
  console.log(formData);

  const labels = {
    name: "نام کاربری",
    email: "ایمیل",
    phoneNumber: "شماره تلفن",
    biography: "بیوگرافی",
  };

  return (
    <div className="max-w-sm">
      <h1 className="text-xl font-bold mb-4">اطلاعات کاربری</h1>
      <form className="flex flex-col-reverse">
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
      </form>
    </div>
  );
}

export default MePage;
