export default function Menu({ className = "" }) {
  return (
    <div className={`flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${className}`}>
      <span className="block h-0.5 w-7 bg-current rounded-2xl" />
      <span className="block h-0.5 w-7 bg-current rounded-2xl" />
      <span className="block h-0.5 w-7 bg-current rounded-2xl" />
    </div>
  );
}