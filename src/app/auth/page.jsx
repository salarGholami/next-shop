"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SendOTPFrom from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { checkOTP, getOTP } from "@/services/authServices";
import CheckOTPForm from "./CheckOTPForm";

const RESEND_TIME = 90;

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("09389525194");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(2);
  const [time, setTime] = useState(RESEND_TIME);

  const {
    data,
    error,
    isLoading,
    mutateAsync: mutedGetOtp,
  } = useMutation({
    mutationFn: getOTP,
  });

  const { mutateAsync: mutedCheckOtp } = useMutation({
    mutationFn: checkOTP,
  });

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutedGetOtp({ phoneNumber });
      toast.success(data.message);
      setStep(2);
      setTime(RESEND_TIME);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutedCheckOtp({ phoneNumber, otp });
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((s) => s - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPFrom
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={sendOtpHandler}
            isLoading={isLoading}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={() => setStep((s) => s - 1)}
            otp={otp}
            setOtp={setOtp}
            onSubmit={checkOtpHandler}
            time={time}
            onResendCode={sendOtpHandler}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">{renderSteps()}</div>
    </div>
  );
}

export default AuthPage;
