import React from "react";

export default function Divider({ children }) {
  return (
    <div className="flex items-center my-4">
      {/* Linha esquerda */}
      <div className="flex-1 h-px bg-gray-300"></div>

      {/* Texto */}
      <span className="px-3 text-gray-500 text-sm">{children}</span>

      {/* Linha direita */}
      <div className="flex-1 h-px bg-gray-300"></div>
    </div>
  );
}