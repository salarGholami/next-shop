import OTPInput from "react-otp-input";

function CheckOTPForm({ onSubmit, otp, setOtp, onBack, time, onResendCode }) {
  return (
    <div>
      <button onClick={onBack}>برگشت</button>
      <div>
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendCode}>ارسال مجدد کرد</button>
        )}
      </div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <p>کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
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
