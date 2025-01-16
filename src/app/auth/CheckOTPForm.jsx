import OTPInput from "react-otp-input";
import { CiEdit } from "react-icons/ci";
import { HiArrowNarrowRight } from "react-icons/hi";

function CheckOTPForm({
  otpResponse,
  onSubmit,
  otp,
  setOtp,
  onBack,
  time,
  onResendCode,
}) {
  return (
    <div>
      <button onClick={onBack} className="mb-4">
        <HiArrowNarrowRight className="w-6 h-6 text-secondary-500 hover:text-primary-900" />
      </button>
      {otpResponse && (
        <p className="flex gap-x-1">
          {otpResponse?.message}
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 hover:text-primary-900" />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button className=" hover:text-primary-900" onClick={onResendCode}>
            ارسال مجدد کد ؟!
          </button>
        )}
      </div>
      <form className="space-y-5" onSubmit={onSubmit}>
        <p>کد تایید را وارد کنید .</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          renderInput={(props) => <input type="number" {...props} />}
        />
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
