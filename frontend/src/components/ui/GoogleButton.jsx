import React from "react";

export default function GoogleButton({
  children = "Login with Google",
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-3 px-4 py-4 rounded-full border border-gray-300 bg-white text-sm font-medium hover:bg-gray-100 ${className}
      

      [@media(max-height:769px)]:h-10
      `}
      {...props}
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        className="w-5 h-5"
      />

      {children}
    </button>
  );
}
