export default function CheckBox({ checked, onChange, children, ...props }) {
  return (
    <label className="flex items-center gap-2 p-2 select-none cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <span>{children}</span>
    </label>
  );
}
