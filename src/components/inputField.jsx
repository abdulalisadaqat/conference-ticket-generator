export default function InputField({
  label = "text",
  type = "text",
  id = "text",
  placeholder = "",
  onChange,
  required = false,
}) {
  return (
    <>
      <label htmlFor={id} className="block text-primary-200">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full border border-primary-500 rounded-xl p-3 bg-primary/10 focus:outline-2 outline-primary-500 outline-offset-[3px] hover:bg-primary/20"
        onChange={(e) => onChange(e)}
        required={required}
      />
    </>
  );
}
