import TextFiled from "@/common/TextFiled";

function SendOTPForm({ phoneNumber, onChange, onSubmit }) {
  return (
    <div>
      <form className="space-y-5" onSubmit={onSubmit}>
        <TextFiled
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
