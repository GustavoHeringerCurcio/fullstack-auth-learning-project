import React from "react";

const InputText = ({
  value,
  onChange,
  placeholder = "Enter text",
  type = "text",
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full [@media(max-height:769px)]:h-10 py-3 rounded-lg bg-gray-100 border border-black focus:border-black focus:ring-1 focus:ring-black outline-none md:text-medium text-gray-700 ${className}`}
      {...props}
    />
  );
};

export default InputText;