
export default function CheckBox({ children }) {
    return (
        <div className="flex items-center justify-between w-full text-sm">

      {/* CheckBox */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="accent-black"
        />
        <span>{children}</span>
      </label>
      </div>
    )
}