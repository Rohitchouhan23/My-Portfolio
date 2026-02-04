export default function X() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      
      {/* Line 1 */}
      <span className="absolute h-0.5 w-7 bg-white rotate-45 co rounded-2xl" />

      {/* Line 2 */}
      <span className="absolute h-0.5 w-7 bg-white -rotate-45 rounded-2xl" />

    </div>
  );
}
