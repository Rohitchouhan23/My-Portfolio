import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <button
     
      className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
    >
      {/* Line 1 */}
      <span
        className={`block h-0.5 w-7 bg-white transition-all duration-300 rounded-2xl
        ${open ? "rotate-45 translate-y-2" : ""}`}
      />

      {/* Line 2 */}
      <span
        className={`block h-0.5 w-7 bg-white transition-all duration-300 rounded-2xl
        ${open ? "opacity-0" : ""}`}
      />

      {/* Line 3 */}
      <span
        className={`block h-0.5 w-7 bg-white transition-all duration-300 rounded-2xl
        ${open ? "-rotate-45 -translate-y-2" : ""}`}
      />
    </button>
  );
}
