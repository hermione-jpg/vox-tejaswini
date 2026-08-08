export default function Ripple() {
  return (
    <div
      aria-hidden
      className="relative mx-auto flex h-64 w-64 md:h-80 md:w-80 items-center justify-center"
    >
      <span className="ripple-ring" style={{ animationDelay: "0s" }} />
      <span className="ripple-ring" style={{ animationDelay: "1.15s" }} />
      <span className="ripple-ring" style={{ animationDelay: "2.3s" }} />
      <span className="relative h-2 w-2 rounded-full bg-ink" />
    </div>
  );
}
