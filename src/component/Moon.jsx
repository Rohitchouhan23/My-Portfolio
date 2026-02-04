import React from "react";

function MoonIcon() {
  return (
    <div
      className="w-9 h-9 flex items-center justify-center rounded-full
      bg-gradient-to-br from-gray-700 to-gray-900
      shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
    >
      <span className="text-xl text-yellow-300">🌙</span>
    </div>
  );
}

export default MoonIcon;
