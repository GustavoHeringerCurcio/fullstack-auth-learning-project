import { Link } from "react-router-dom";

export default function RememberForgot() {
  return (
    <div className="flex items-center justify-between w-full text-sm">

      {/* Remember me */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="accent-black"
        />
        <span>Remember me</span>
      </label>

      {/* Forgot password */}
      <Link
        to="/forgot-password"
        className="font-medium text-black hover:underline"
      >
        Forgot password?
      </Link>

    </div>
  );
}
