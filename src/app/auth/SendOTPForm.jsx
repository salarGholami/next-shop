import TextFiled from "@/common/TextFiled";

function SendOTPForm({ phoneNumber, onChange }) {
  return (
    <div>
      <form>
        <TextFiled
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SendOTPForm;
