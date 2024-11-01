export default function Input({label, type, value, placeholder, onChange, name}) {
  return (
    <section>
      <label className="block mt-8 mb-1 text-sm font-semibold">{label}</label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="flex w-full gap-5 px-4 py-2 my-4 border rounded-md w-25 lh-screen border-stone-300 focus:outline-none focus:ring-2 focus:ring-s"
        name={name}
        />
    </section>
  );
}
