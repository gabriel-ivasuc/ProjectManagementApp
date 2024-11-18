export default function Button({ children, text, ...props }) {
  return (
    <div>
      <button
        className="px-4 py-2 text-xs rounded-md md:text-base bg-stone-700 text-stone-400 hover:bg-stone-700 hover:text-stone-100"
        {...props}
      >
        {children}
        {text}
      </button>
    </div>
  );
}
