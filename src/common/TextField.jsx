function TextField({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col py-3 px-4 space-y-1">
      <label htmlFor={name} className="block">
        {label}
      </label>
      <input
        autoComplete="off"
        className="w-full py-3 px-4 rounded-xl bg-gray-100 text-secondary-900 border border-gray-100 outline-none duration-200 transition-all ease-in-out focus:shadow-input-focus focus:bg-white"
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;
