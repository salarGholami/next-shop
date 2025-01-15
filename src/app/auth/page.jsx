"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import http from "@/services/httpService";
import SendOTPFrom from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "@/services/authServices";

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
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
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default AuthPage;
