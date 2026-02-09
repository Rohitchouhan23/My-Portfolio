export default function X({ className = "" }) {
  return (
    <div className={`relative w-10 h-10 flex items-center justify-center ${className}`}>
      <span className="absolute h-0.5 w-7 bg-current rotate-45 rounded-2xl" />
      <span className="absolute h-0.5 w-7 bg-current -rotate-45 rounded-2xl" />
    </div>
  );
}