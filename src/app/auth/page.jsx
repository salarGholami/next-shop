"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import http from "@/services/httpService";
import SendOTPFrom from "./SendOTPForm";

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await http.post("/user/get-otp", { phoneNumber });
      toast.success(data.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <SendOTPFrom
          phoneNumber={phoneNumber}
          onChange={phoneNumberHandler}
          onSubmit={sendOtpHandler}
        />
      </div>
    </div>
  );
}

export default AuthPage;
